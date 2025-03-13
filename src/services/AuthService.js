import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, providerFacebook, providerGoogle } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

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
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    const newUser = userCredential.user;

    await setDoc(doc(db, "users", newUser.uid), {
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

    return newUser;
  } catch (error) {
    console.error("Registration failed:", error.message);
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

      console.log("Processed infoUser:", infoUser);
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
