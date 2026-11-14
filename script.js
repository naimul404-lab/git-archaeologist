const caseData = [
  {
    title: "Case 09: Missing branch trace",
    description:
      "A feature branch was merged, but the history looks incomplete. Follow the evidence to determine what happened.",
  },
  {
    title: "Case 10: Forced reset alert",
    description:
      "A teammate used a reset command that removed local progress. The investigation focuses on restoring the branch without losing the latest work.",
  },
  {
    title: "Case 11: Merge conflict report",
    description:
      "Two developers edited the same file. The repo shows conflicting changes that need to be resolved without overwriting the intended logic.",
  },
  {
    title: "Case 12: Rebase timeline anomaly",
    description:
      "The branch order changed after a rebase. The history is linear, but the original feature story is harder to trace.",
  },
];

const showCaseBtn = document.getElementById("showCaseBtn");
const caseTitle = document.getElementById("caseTitle");
const caseDescription = document.getElementById("caseDescription");

let caseIndex = 0;
showCaseBtn.addEventListener("click", () => {
  caseIndex = (caseIndex + 1) % caseData.length;
  const selectedCase = caseData[caseIndex];
  caseTitle.textContent = selectedCase.title;
  caseDescription.textContent = selectedCase.description;
});
