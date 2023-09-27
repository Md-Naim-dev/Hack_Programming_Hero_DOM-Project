const milestoneData = JSON.parse(data).data;

// finding html elements

const loadMilestones = () => {
  const milestones = document.querySelector(".milestones");
  milestones.innerHTML = `${milestoneData
    .map((milestone) => {
      return `<div class="milestone border-b" id="${milestone._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick="markMilestone(this, ${
        milestone._id
      })" /></div>
      <div onclick="openMilestone(this, ${milestone._id})">
        <p>
        ${milestone.name}
          <span class="downArrow"
            ><i class="fas fa-chevron-down"></i
          ></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
    ${milestone.modules
      .map((eachModule) => {
        return `<div class="module border-b">
        <p>${eachModule.name}</p>
      </div>`;
      })
      .join("")}

    </div>
  </div>`;
    })
    .join("")}`;
};

const openMilestone = (milestoneElement, currentElementId) => {
  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector(".show");
  const active = document.querySelector(".active");

  // font bold current milestone module
  if (active && !milestoneElement.classList.contains("active")) {
    active.classList.remove("active");
  }
  milestoneElement.classList.toggle("active");

  // toggle current milestone module

  if (!currentPanel.classList.contains("show") && shownPanel) {
    shownPanel.classList.remove("show");
  }
  currentPanel.classList.toggle("show");

  showMilestone(currentElementId);
};

const showMilestone = (currentElementId) => {
  const milestoneImage = document.querySelector(".milestoneImage");

  milestoneImage.src = milestoneData[currentElementId].image;
  milestoneImage.style.opacity = "0";

  // module image er title and description

  const title = document.querySelector(".title");
  const description = document.querySelector(".details");

  title.innerText = milestoneData[currentElementId].name;
  description.innerText = milestoneData[currentElementId].description;
};

// listen for image load

const milestoneImage = document.querySelector(".milestoneImage");

milestoneImage.onload = function () {
  this.style.opacity = "1";
};

const markMilestone = (checkbox, id) => {
  const milestonesList = document.querySelector(".milestones");
  const doneList = document.querySelector(".doneList");
  const item = document.getElementById(id);

  if (checkbox.checked) {
    milestonesList.removeChild(item);
    doneList.appendChild(item);
  } else {
    milestonesList.appendChild(item);
    doneList.removeChild(item);
  }

  // sorting milestone
};

loadMilestones();
