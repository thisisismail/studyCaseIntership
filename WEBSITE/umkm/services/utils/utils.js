const getErrorMessage = (errCode) => {
  switch (errCode) {
    case "auth/user-not-found":
      return "Akun tidak ditemukan";
    case "auth/wrong-password" || "auth/wrong-email":
      return "Akun tidak ditemukan";
    case "auth/email-already-in-use":
      return "Email sudah digunakan";
    default:
      return "Error, periksa koneksi internet Anda";
  }
};

export { getErrorMessage };
