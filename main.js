const domain = "meet.jit.si/FlowerPranaShala";
const options = {
  roomName: "FlowerPranaShala",
  width: 700,
  height: 700,
  parentNode: document.querySelector("#meet"),
};
const api = new JitsiMeetExternalAPI(domain, options);
