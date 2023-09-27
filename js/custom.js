const milestoneData = JSON.parse(data).data;

const loadAllMilestones = () => {
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
      .map((module) => {
        return `<div class="module border-b">
        <p>${module.name}</p>
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

  // when toggle milestone fontBold title
  if (active && !milestoneElement.classList.contains("active")) {
    active.classList.remove("active");
  }
  milestoneElement.classList.toggle("active");

  // toggle milestone
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

  // image details text
  const title = document.querySelector(".title");
  const details = document.querySelector(".details");

  title.innerText = milestoneData[currentElementId].name;
  details.innerText = milestoneData[currentElementId].description;
};
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
  }
};

loadAllMilestones();
