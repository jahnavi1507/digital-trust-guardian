function checkMsg() {
  let msg = document.getElementById("msg").value;

  if (msg.includes("OTP") || msg.includes("loan")) {
    alert("⚠️ Scam detected!");
  } else {
    alert("✅ Safe message");
  }
}
data: [
  Math.floor(Math.random()*10),
  Math.floor(Math.random()*10),
  Math.floor(Math.random()*10),
  Math.floor(Math.random()*10),
  Math.floor(Math.random()*10)
]