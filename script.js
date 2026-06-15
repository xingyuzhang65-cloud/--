const rows = [
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "运输中", bookingNo: "REQ260610-0002-MW-TTTX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 8, transit: "", type: "40HQ", containerNo: "CCLU7400926", systemNo: "CCLU7400926-260623" },
  { customer: "TTTX", salesperson: "Tina", orderType: "普单", status: "运输中", bookingNo: "REQ260610-0001-MW-TTTX", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 16, transit: "", type: "40HQ", containerNo: "TCNU5379926", systemNo: "TCNU5379926-260623" },
  { customer: "SLGYL", salesperson: "jessie", orderType: "普单", status: "运输中", bookingNo: "REQ260610-0001-MW-SLGYL", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 12, transit: "", type: "45HQ", containerNo: "GOSU1053503", systemNo: "GOSU1053503-260623" },
  { customer: "YQP", salesperson: "天晟", orderType: "普单", status: "运输中", bookingNo: "REQ260610-0001-MW-YQP", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 11, transit: "", type: "40RH", containerNo: "SEKU9431682", systemNo: "SEKU9431682-260618" },
  { customer: "JJGJ", salesperson: "jessie", orderType: "普单", status: "运输中", bookingNo: "REQ260609-0001-MW-JJGJ", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 3, transit: "", type: "40HQ", containerNo: "CAAU8732748", systemNo: "CAAU8732748-260710" },
  { customer: "RX", salesperson: "Cathy", orderType: "普单", status: "运输中", bookingNo: "REQ260609-0001-MW-RX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "SMCU7009844", systemNo: "SMCU7009844-260615" },
  { customer: "RX", salesperson: "jessie", orderType: "普单", status: "运输中", bookingNo: "REQ260608-0001-MW-RX", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 10, transit: "", type: "40HQ", containerNo: "ONEU6740504", systemNo: "ONEU6740504-260615" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "运输中", bookingNo: "REQ260608-0011-MW-TTTX", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 20, transit: "", type: "40HQ", containerNo: "MSNU9066272", systemNo: "MSNU9066272-260615" },
  { customer: "TTTX", salesperson: "Cathy", orderType: "普单", status: "运输中", bookingNo: "REQ260608-0007-MW-TTTX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 15, transit: "", type: "40HQ", containerNo: "DFSU7790127", systemNo: "DFSU7790127-260623" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "运输中", bookingNo: "REQ260608-0006-MW-TTTX", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 16, transit: "", type: "40HQ", containerNo: "OOCU5524700", systemNo: "OOCU5524700-260623" },
  { customer: "TTTX", salesperson: "Cathy", orderType: "普单", status: "运输中", bookingNo: "REQ260608-0005-MW-TTTX", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "CSNU8682381", systemNo: "CSNU8682381-260623" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "运输中", bookingNo: "REQ260608-0004-MW-TTTX", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 8, transit: "", type: "40HQ", containerNo: "OOCU5418870", systemNo: "OOCU5418870-260623" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "运输中", bookingNo: "REQ260608-0003-MW-TTTX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 18, transit: "", type: "40HQ", containerNo: "OOCU6137033", systemNo: "OOCU6137033-260623" },
  { customer: "TTTX", salesperson: "Cathy", orderType: "普单", status: "运输中", bookingNo: "REQ260608-0002-MW-TTTX", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 19, transit: "", type: "40HQ", containerNo: "FFAU2850840", systemNo: "FFAU2850840-260626" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "运输中", bookingNo: "REQ260608-0001-MW-TTTX", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "CSGU7187527", systemNo: "CSGU7187527-260623" },
  { customer: "SHXY", salesperson: "Tina", orderType: "普单", status: "运输中", bookingNo: "REQ260606-0002-MW-SHXY", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 4, transit: "", type: "40GP", containerNo: "TTNU8336962", systemNo: "TTNU8336962-260615" },
  { customer: "SHXY", salesperson: "jessie", orderType: "普单", status: "运输中", bookingNo: "REQ260606-0001-MW-SHXY", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 3, transit: "", type: "40GP", containerNo: "CGMU5822559", systemNo: "CGMU5822559-260615" },
  { customer: "SLGYL", salesperson: "Cathy", orderType: "普单", status: "运输中", bookingNo: "REQ260606-0004-MW-SLGYL", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 10, transit: "", type: "40GP", containerNo: "TCLU1297334", systemNo: "TCLU1297334-260615" },
  { customer: "SLGYL", salesperson: "天晟", orderType: "普单", status: "运输中", bookingNo: "REQ260606-0003-MW-SLGYL", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 11, transit: "", type: "40GP", containerNo: "CXRU1004834", systemNo: "CXRU1004834-260615" }
];

const state = {
  filters: {
    keyword: "",
    customer: "",
    salesperson: "",
    orderType: "",
    status: "",
    type: "",
    warehouse: "",
    pickup: ""
  },
  selected: new Set(),
  sortDirection: ""
};

const warehouseOptions = ["洛杉矶仓", "芝加哥仓", "新泽西仓", "萨凡纳仓"];

const els = {
  keywordInput: document.querySelector("#keywordInput"),
  customerInput: document.querySelector("#customerInput"),
  salespersonInput: document.querySelector("#salespersonInput"),
  orderTypeSelect: document.querySelector("#orderTypeSelect"),
  statusSelect: document.querySelector("#statusSelect"),
  typeSelect: document.querySelector("#typeSelect"),
  warehouseSelect: document.querySelector("#warehouseSelect"),
  pickupSelect: document.querySelector("#pickupSelect"),
  searchButton: document.querySelector("#searchButton"),
  resetButton: document.querySelector("#resetButton"),
  tableBody: document.querySelector("#tableBody"),
  resultSummary: document.querySelector("#resultSummary"),
  selectionInfo: document.querySelector("#selectionInfo"),
  selectAll: document.querySelector("#selectAll"),
  emptyState: document.querySelector("#emptyState"),
  sortButton: document.querySelector("[data-sort='bookingNo']"),
  tabButtons: document.querySelectorAll(".tab-button")
};

function uniqueValues(key) {
  return [...new Set(rows.map((row) => row[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}

function fillSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function readFilters() {
  state.filters.keyword = els.keywordInput.value.trim().toLowerCase();
  state.filters.customer = els.customerInput.value.trim().toLowerCase();
  state.filters.salesperson = els.salespersonInput.value.trim().toLowerCase();
  state.filters.orderType = els.orderTypeSelect.value;
  state.filters.status = els.statusSelect.value;
  state.filters.type = els.typeSelect.value;
  state.filters.warehouse = els.warehouseSelect.value;
  state.filters.pickup = els.pickupSelect.value;
}

function getFilteredRows() {
  const { keyword, customer, salesperson, orderType, status, type, warehouse, pickup } = state.filters;

  return rows
    .filter((row) => {
      const keywordMatch = !keyword || [row.bookingNo, row.containerNo, row.systemNo, row.customer, row.salesperson, row.orderType, row.status].some((value) => value.toLowerCase().includes(keyword));
      const customerMatch = !customer || row.customer.toLowerCase().includes(customer);
      const salespersonMatch = !salesperson || row.salesperson.toLowerCase().includes(salesperson);
      const orderTypeMatch = !orderType || row.orderType === orderType;
      const statusMatch = !status || row.status === status;
      const typeMatch = !type || row.type === type;
      const warehouseMatch = !warehouse || row.warehouse === warehouse;
      const pickupMatch = !pickup || row.pickup === pickup;

      return keywordMatch && customerMatch && salespersonMatch && orderTypeMatch && statusMatch && typeMatch && warehouseMatch && pickupMatch;
    })
    .sort((a, b) => {
      if (!state.sortDirection) {
        return 0;
      }

      const result = a.bookingNo.localeCompare(b.bookingNo);
      return state.sortDirection === "asc" ? result : -result;
    });
}

function linkCell(text) {
  const safeText = escapeHtml(text);
  return `<a href="#" title="${safeText}">${safeText}</a>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTable() {
  const visibleRows = getFilteredRows();
  els.tableBody.innerHTML = visibleRows
    .map((row, index) => {
      const selected = state.selected.has(row.containerNo);
      return `
        <tr class="${selected ? "is-selected" : ""}">
          <td>${index + 1}</td>
          <td><input class="row-check" type="checkbox" data-id="${escapeHtml(row.containerNo)}" ${selected ? "checked" : ""} aria-label="选择第 ${index + 1} 行" /></td>
          <td title="${escapeHtml(row.customer)}">${escapeHtml(row.customer)}</td>
          <td>${linkCell(row.bookingNo)}</td>
          <td title="${escapeHtml(row.pickup)}">${escapeHtml(row.pickup)}</td>
          <td title="${escapeHtml(row.warehouse)}">${escapeHtml(row.warehouse)}</td>
          <td title="${escapeHtml(row.dock)}">${escapeHtml(row.dock)}</td>
          <td title="${escapeHtml(row.rail)}">${escapeHtml(row.rail)}</td>
          <td>${row.quantity}</td>
          <td title="${escapeHtml(row.transit)}">${escapeHtml(row.transit)}</td>
          <td>${escapeHtml(row.type)}</td>
          <td>${linkCell(row.containerNo)}</td>
          <td title="${escapeHtml(row.systemNo)}">${escapeHtml(row.systemNo)}</td>
          <td title="${escapeHtml(row.salesperson)}">${escapeHtml(row.salesperson)}</td>
          <td title="${escapeHtml(row.orderType)}">${escapeHtml(row.orderType)}</td>
          <td><span class="status-badge">${escapeHtml(row.status)}</span></td>
        </tr>
      `;
    })
    .join("");

  els.resultSummary.textContent = `共 ${visibleRows.length} 条`;
  els.selectionInfo.textContent = `已选 ${state.selected.size} 条`;
  els.emptyState.hidden = visibleRows.length > 0;
  updateSelectAll(visibleRows);
}

function updateSelectAll(visibleRows) {
  const visibleIds = visibleRows.map((row) => row.containerNo);
  const checkedCount = visibleIds.filter((id) => state.selected.has(id)).length;
  els.selectAll.checked = visibleIds.length > 0 && checkedCount === visibleIds.length;
  els.selectAll.indeterminate = checkedCount > 0 && checkedCount < visibleIds.length;
}

function applySearch() {
  readFilters();
  renderTable();
}

function resetSearch() {
  els.keywordInput.value = "";
  els.customerInput.value = "";
  els.salespersonInput.value = "";
  els.orderTypeSelect.value = "";
  els.statusSelect.value = "";
  els.typeSelect.value = "";
  els.warehouseSelect.value = "";
  els.pickupSelect.value = "";
  state.selected.clear();
  applySearch();
}

function switchTab(tabName) {
  els.tabButtons.forEach(function (btn) {
    var isActive = btn.dataset.tab === tabName;
    btn.classList.toggle("active", isActive);
  });

  document.querySelectorAll(".page-shell").forEach(function (panel) {
    panel.hidden = panel.id !== "tab-" + tabName;
  });
}

function bindEvents() {
  els.tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      switchTab(btn.dataset.tab);
    });
  });
  els.searchButton.addEventListener("click", applySearch);
  els.resetButton.addEventListener("click", resetSearch);

  [els.keywordInput, els.customerInput, els.salespersonInput].forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        applySearch();
      }
    });
  });

  [els.orderTypeSelect, els.statusSelect, els.typeSelect, els.warehouseSelect, els.pickupSelect].forEach((select) => {
    select.addEventListener("change", applySearch);
  });

  els.tableBody.addEventListener("change", (event) => {
    if (!event.target.matches(".row-check")) {
      return;
    }

    const id = event.target.dataset.id;
    if (event.target.checked) {
      state.selected.add(id);
    } else {
      state.selected.delete(id);
    }

    renderTable();
  });

  els.selectAll.addEventListener("change", () => {
    getFilteredRows().forEach((row) => {
      if (els.selectAll.checked) {
        state.selected.add(row.containerNo);
      } else {
        state.selected.delete(row.containerNo);
      }
    });

    renderTable();
  });

  els.sortButton.addEventListener("click", () => {
    state.sortDirection = state.sortDirection === "desc" ? "asc" : "desc";
    els.sortButton.classList.toggle("asc", state.sortDirection === "asc");
    els.sortButton.classList.toggle("desc", state.sortDirection === "desc");
    renderTable();
  });
}

function init() {
  fillSelect(els.orderTypeSelect, uniqueValues("orderType"));
  fillSelect(els.statusSelect, uniqueValues("status"));
  fillSelect(els.typeSelect, uniqueValues("type"));
  fillSelect(els.warehouseSelect, warehouseOptions);
  fillSelect(els.pickupSelect, uniqueValues("pickup"));
  bindEvents();
  applySearch();
}

init();
