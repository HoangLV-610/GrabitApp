import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, providerFacebook, providerGoogle } from "../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { showToast } from "../utils/toast";
import { updateUser } from "../redux/slice/user.slice";

// đăng nhập bằng facebook
export const handleFacebookLogin = async () => {
  try {
    const result = await signInWithPopup(auth, providerFacebook);
    console.log("User Info:", result);
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

// đăng nhập bằng google
export const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, providerGoogle);

    console.log("User Info:", result);
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

// đăng ký tài khoản
export const registerUser = async (user) => {
  try {
    // Kiểm tra xem email đã tồn tại chưa
    const signInMethods = await fetchSignInMethodsForEmail(auth, user.email);
    if (signInMethods.length > 0) {
      showToast(
        "Email này đã được đăng ký. Vui lòng sử dụng email khác!",
        "error"
      );
      return { error: "Email đã tồn tại" };
    }
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    const newUser = userCredential.user;
    const userId = newUser.uid;

    await setDoc(doc(db, "users", newUser.uid), {
      userId,
      address: user.address,
      city: user.city,
      country: user.country,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      postCode: user.postCode,
      regionState: user.regionState,
      createAt: new Date(),
    });

    return { message: "success", newUser };
  } catch (error) {
    let errorMessage = "Đăng ký không thành công!";
    if (error.code === "auth/email-already-in-use") {
      errorMessage = "Email này đã được đăng ký. Vui lòng sử dụng email khác!";
    } else if (error.code === "auth/weak-password") {
      errorMessage = "Mật khẩu quá yếu. Vui lòng nhập mật khẩu mạnh hơn!";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "Email không hợp lệ!";
    }

    return { message: "error", error: errorMessage };
  }
};

// đăng nhập
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return user;
  } catch (error) {
    console.error("Login failed:", error.message);
    return null;
  }
};

// lấy thông tin user từ id
export const getUser = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      // Chuyển đổi createdAt nếu có
      const infoUser = {
        ...userData,
        createAt: userData.createAt
          ? userData.createAt.toDate().toISOString()
          : userData.createAt
          ? userData.createAt.toDate().toISOString()
          : null,
      };
      return infoUser;
    } else {
      console.error("User document not found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return null;
  }
};

// lấy tên của sản phẩm thông qua idCategory
export const getNameCategory = async (idCategory) => {
  try {
    //truy vấn vào bảng categories
    const categoriesSnapshot = await getDocs(collection(db, "categories"));
    // lấy ra từ item của bảng categories
    const categories = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const category = categories.find((item) => item.id === idCategory);
    return category ? category.title : "Không xác định";
  } catch (error) {
    console.error("Lỗi khi lấy danh mục:", error);
    return "Không xác định";
  }
};

// lấy list sản phẩm
export const getAllProduct = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    // Dùng `Promise.all` để đảm bảo tất cả các promise được xử lý trước khi trả về
    const dataProduct = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const categoryName = await getNameCategory(doc.data().categoryID);
        return {
          id: doc.id,
          ...doc.data(),
          nameCategory: categoryName, // Đợi lấy tên danh mục xong mới gán
        };
      })
    );

    return dataProduct;
  } catch (error) {
    console.log("Lỗi khi lấy dữ liệu Product từ Firebase", error);
    return [];
  }
};

// chi tiết sản phẩm
export const getProductById = async (id) => {
  try {
    const productDoc = doc(db, "products", id);
    const docSnap = await getDoc(productDoc);
    if (docSnap.exists) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("Product not found!");
      return null;
    }
  } catch (error) {
    console.error("Get product error:", error.message);
    return null;
  }
};

// chỉnh sửa thông tin user
export const updateMyProfile = async (dispatch, dataUpdate) => {
  try {
    const userCurrent = auth.currentUser;
    if (!userCurrent) {
      showToast("Bạn chưa đăng nhập!", "error");
      return;
    }
    // // Nếu có email mới, gửi email xác minh trước
    // if (dataUpdate.email && dataUpdate.email !== userCurrent.email) {
    //   try {
    //     // firebase bắt buộc gửi email xác minh trước
    //     await sendEmailVerification(userCurrent);
    //     showToast("Vui lòng kiểm tra email để xác nhận!", "info");
    //     return false; // Chặn cập nhật, đợi người dùng xác minh email
    //   } catch (error) {
    //     console.log("Lỗi gửi email xác minh", error);
    //     showToast("Không thể gửi email xác minh!", "error");
    //     return false;
    //   }
    // }

    // lấy thông tin từ bảng users
    const userRef = doc(db, "users", userCurrent.uid);
    // update
    await updateDoc(userRef, dataUpdate);
    // thay đổi thông tin (redux)
    dispatch(updateUser(dataUpdate));
    return true;
  } catch (error) {
    console.log("Sửa thông tin user thất bại", error);
    return false;
  }
};

// lấy danh sách tin tức
export const getAllBlogs = async () => {
  try {
    const dataSnapshot = await getDocs(collection(db, "blogs"));
    const dataBlogs = dataSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return dataBlogs;
  } catch (error) {
    console.log("Không lấy được danh sách tin tức", error);
  }
};

// Thêm sản phẩm vào danh sách yêu thích (wishlist)
export const addProductWishList = async (userId, productId) => {
  try {
    if (!userId) {
      showToast("Vui lòng đăng nhập", "success");
      return;
    }
    const addProduct = await addDoc(collection(db, "wishList"), {
      userId,
      productId,
      addedAt: new Date(),
    });

    if (addProduct) {
      showToast("Đã thêm vào wishlist", "success");
      return addProduct;
    }
  } catch (error) {
    showToast("Add sản phẩm thất bại", "error");
    console.log("Không thêm được sản phẩm vào wishlist", error);
  }
};

export const checkProductWishList = async (productId) => {
  try {
    const q = query(
      collection(db, "wishList"),
      where("productId", "==", productId)
    );
    const snapshot = await getDocs(q);

    return !snapshot.empty; // Nếu có dữ liệu thì trả về true, ngược lại trả về false
  } catch (error) {
    console.log("Lỗi kiểm tra wishlist:", error);
    return false;
  }
};

// Lấy danh sách wishlist
export const getItemWishList = async (userId) => {
  try {
    const q = query(collection(db, "wishList"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const wishlist = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return wishlist;
  } catch (error) {
    console.log("Không lấy được wishlist", error);
  }
};

// lấy tất cả danh sách wishlist
export const getAllWishList = async () => {
  try {
    const wishlistSnapchot = await getDocs(collection(db, "wishList"));
    const dataWishList = wishlistSnapchot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(dataWishList);

    return dataWishList;
  } catch (error) {
    console.log("Không lấy được danh sách wishlist", error);
    return []; // Trả về mảng rỗng nếu lỗi
  }
};

// Xoá item của wishlist
export const removeProductWishList = async (userId, productId) => {
  try {
    const q = query(
      collection(db, "wishList"),
      where("userId", "==", userId),
      where("productId", "==", productId)
    );
    const snapshot = await getDocs(q);

    snapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    showToast("Đã xoá khỏi wishlist", "success");
  } catch (error) {
    console.log("Lỗi khi xoá sản phẩm khỏi wishlist:", error);
    showToast("Xoá sản phẩm thất bại", "error");
  }
};
