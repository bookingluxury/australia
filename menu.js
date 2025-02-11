// Lưu trạng thái menu khi bấm
function setActiveTab(tabId) {
  localStorage.setItem('activeTab', tabId);
}

// Khi tải trang, giữ nguyên tab đã chọn trước đó
window.onload = function () {
  const activeTab = localStorage.getItem('activeTab');
  if (activeTab) {
    const activeLink = document.querySelector(`a[href="${activeTab}"]`);
    if (activeLink) activeLink.classList.add('active');
  }
};
