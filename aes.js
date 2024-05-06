const key = CryptoJS.enc.Utf8.parse("12345678901234567890123456789012"); // 256-bit key
const iv = CryptoJS.enc.Utf8.parse("1234567890123456"); // 128-bit IV

function encrypt() {
  const message = document.getElementById("message").value;
  const encrypted = CryptoJS.AES.encrypt(message, key, {
    iv: iv,
  }).toString();
  document.getElementById("encrypted").value = encrypted;
}

function decrypt() {
  const encrypted = document.getElementById("encrypted").value;
  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
  }).toString(CryptoJS.enc.Utf8);
  document.getElementById("decrypted").value = decrypted;
}
