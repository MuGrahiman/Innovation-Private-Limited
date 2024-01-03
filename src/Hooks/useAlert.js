import React from "react";
import { v4 as uuidv4 } from "uuid";

const useAlert = () => {
  const Alert = (message, type) => {
    const wrapper = document.createElement("div");
    const randomId = uuidv4();
    wrapper.id=`${randomId}-alert`;
    wrapper.innerHTML = [
      `<div class=" alert alert-${type} alert-dismissible " role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',

      `<div class="progress" role="progressbar" aria-label="Example 3px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 1px">
        <div class="progress-bar progress-bar-striped" id="${randomId}" ></div>
      </div>`,

      "</div>",
    ].join("");

    document.getElementById("liveAlertPlaceholder").appendChild(wrapper);
    Progress(randomId);
  };

  return Alert;
};

export default useAlert;

const Progress = (Id) => {
  const progressBar = document.getElementById(`${Id}`);
  let width = 0;
  const interval = setInterval(
    () =>
      width >= 100
        ? clearAlert(interval, Id)
        : (progressBar.style.width = `${width++}%`),
    100
  );
};
const clearAlert = (intervalId, alertId) => {
  clearInterval(intervalId);
  const alertElement = document.getElementById(`${alertId}-alert`);
  if (alertElement) {
    alertElement.remove();
  }
};
