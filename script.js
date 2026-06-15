const rows = [
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-14 23:07:40", bookingNo: "REQ260610-0002-MW-TTTX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 8, transit: "", type: "40HQ", containerNo: "CCLU7400926", systemNo: "CCLU7400926-260623" },
  { customer: "TTTX", salesperson: "Tina", orderType: "普单", status: "接受", createdAt: "2026-06-14 22:43:03", bookingNo: "REQ260610-0001-MW-TTTX", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 16, transit: "", type: "40HQ", containerNo: "TCNU5379926", systemNo: "TCNU5379926-260623" },
  { customer: "SLGYL", salesperson: "jessie", orderType: "普单", status: "运输中", createdAt: "2026-06-13 01:46:51", bookingNo: "REQ260610-0001-MW-SLGYL", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 12, transit: "", type: "45HQ", containerNo: "GOSU1053503", systemNo: "GOSU1053503-260623" },
  { customer: "YQP", salesperson: "天晟", orderType: "普单", status: "预约池", createdAt: "2026-06-12 18:35:22", bookingNo: "REQ260610-0001-MW-YQP", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 11, transit: "", type: "40RH", containerNo: "SEKU9431682", systemNo: "SEKU9431682-260618" },
  { customer: "JJGJ", salesperson: "jessie", orderType: "普单", status: "提柜", createdAt: "2026-06-12 16:20:08", bookingNo: "REQ260609-0001-MW-JJGJ", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 3, transit: "", type: "40HQ", containerNo: "CAAU8732748", systemNo: "CAAU8732748-260710" },
  { customer: "RX", salesperson: "Cathy", orderType: "普单", status: "入库处理中", createdAt: "2026-06-12 14:58:31", bookingNo: "REQ260609-0001-MW-RX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "SMCU7009844", systemNo: "SMCU7009844-260615" },
  { customer: "RX", salesperson: "jessie", orderType: "普单", status: "预报", createdAt: "2026-06-11 21:06:17", bookingNo: "REQ260608-0001-MW-RX", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 10, transit: "", type: "40HQ", containerNo: "ONEU6740504", systemNo: "ONEU6740504-260615" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "接受", createdAt: "2026-06-11 19:44:02", bookingNo: "REQ260608-0011-MW-TTTX", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 20, transit: "", type: "40HQ", containerNo: "MSNU9066272", systemNo: "MSNU9066272-260615" },
  { customer: "TTTX", salesperson: "Cathy", orderType: "普单", status: "运输中", createdAt: "2026-06-11 17:12:45", bookingNo: "REQ260608-0007-MW-TTTX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 15, transit: "", type: "40HQ", containerNo: "DFSU7790127", systemNo: "DFSU7790127-260623" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "预约池", createdAt: "2026-06-11 15:33:19", bookingNo: "REQ260608-0006-MW-TTTX", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 16, transit: "", type: "40HQ", containerNo: "OOCU5524700", systemNo: "OOCU5524700-260623" },
  { customer: "TTTX", salesperson: "Cathy", orderType: "普单", status: "提柜", createdAt: "2026-06-10 20:17:50", bookingNo: "REQ260608-0005-MW-TTTX", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "CSNU8682381", systemNo: "CSNU8682381-260623" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "入库处理中", createdAt: "2026-06-10 18:49:36", bookingNo: "REQ260608-0004-MW-TTTX", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 8, transit: "", type: "40HQ", containerNo: "OOCU5418870", systemNo: "OOCU5418870-260623" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-10 16:25:11", bookingNo: "REQ260608-0003-MW-TTTX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 18, transit: "", type: "40HQ", containerNo: "OOCU6137033", systemNo: "OOCU6137033-260623" },
  { customer: "TTTX", salesperson: "Cathy", orderType: "普单", status: "接受", createdAt: "2026-06-10 13:08:57", bookingNo: "REQ260608-0002-MW-TTTX", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 19, transit: "", type: "40HQ", containerNo: "FFAU2850840", systemNo: "FFAU2850840-260626" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "运输中", createdAt: "2026-06-09 22:54:28", bookingNo: "REQ260608-0001-MW-TTTX", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "CSGU7187527", systemNo: "CSGU7187527-260623" },
  { customer: "SHXY", salesperson: "Tina", orderType: "普单", status: "预约池", createdAt: "2026-06-09 20:31:04", bookingNo: "REQ260606-0002-MW-SHXY", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 4, transit: "", type: "40GP", containerNo: "TTNU8336962", systemNo: "TTNU8336962-260615" },
  { customer: "SHXY", salesperson: "jessie", orderType: "普单", status: "提柜", createdAt: "2026-06-09 18:16:39", bookingNo: "REQ260606-0001-MW-SHXY", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 3, transit: "", type: "40GP", containerNo: "CGMU5822559", systemNo: "CGMU5822559-260615" },
  { customer: "SLGYL", salesperson: "Cathy", orderType: "普单", status: "入库处理中", createdAt: "2026-06-08 17:42:13", bookingNo: "REQ260606-0004-MW-SLGYL", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 10, transit: "", type: "40GP", containerNo: "TCLU1297334", systemNo: "TCLU1297334-260615" },
  { customer: "SLGYL", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-08 15:05:26", bookingNo: "REQ260606-0003-MW-SLGYL", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 11, transit: "", type: "40GP", containerNo: "CXRU1004834", systemNo: "CXRU1004834-260615" },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-14 14:22:10", bookingNo: "REQ260610-0003-MW-TTTX", pickup: "火车站", warehouse: "休斯顿仓", dock: "", rail: "", quantity: 14, transit: "", type: "40HQ", containerNo: "TGBU5012347", systemNo: "TGBU5012347-260623" },
  { customer: "RX", salesperson: "Cathy", orderType: "普单", status: "运输中", createdAt: "2026-06-12 09:10:33", bookingNo: "REQ260609-0002-MW-RX", pickup: "火车站", warehouse: "奥克兰仓", dock: "", rail: "", quantity: 9, transit: "", type: "40HQ", containerNo: "BMOU4123895", systemNo: "BMOU4123895-260615" },
  { customer: "SHXY", salesperson: "jessie", orderType: "普单", status: "接受", createdAt: "2026-06-13 11:45:08", bookingNo: "REQ260607-0001-MW-SHXY", pickup: "火车站", warehouse: "休斯顿仓", dock: "", rail: "", quantity: 6, transit: "", type: "40GP", containerNo: "HLXU8201749", systemNo: "HLXU8201749-260615" }
];

const state = {
  filters: {
    keyword: "",
    customer: "",
    salesperson: "",
    orderType: "",
    status: "",
    warningStatus: "",
    createdAt: "",
    type: "",
    warehouse: "",
    pickup: ""
  },
  selected: new Set(),
  activeWarehouseTab: "",
  overviewCustomerFilter: "",
  sortKey: "",
  sortDirection: ""
};

const warehouseOptions = ["洛杉矶仓", "芝加哥仓", "新泽西仓", "萨凡纳仓", "休斯顿仓", "奥克兰仓"];
const statusOptions = ["预报", "接受", "运输中", "预约池", "提柜", "入库处理中"];
const warningStatusOptions = ["正常", "异常"];
const exportColumns = [
  { title: "序号", getValue: (_row, index) => index + 1 },
  { title: "客户名称", key: "customer" },
  { title: "预报单号", key: "bookingNo" },
  { title: "提柜地点", key: "pickup" },
  { title: "仓库", key: "warehouse" },
  { title: "码头", key: "dock" },
  { title: "火车站", key: "rail" },
  { title: "库点数量", key: "quantity" },
  { title: "中转仓", key: "transit" },
  { title: "集装箱类型", key: "type" },
  { title: "柜号", key: "containerNo" },
  { title: "系统柜号", key: "systemNo" },
  { title: "业务员", key: "salesperson" },
  { title: "字段类型", key: "orderType" },
  { title: "运单状态", key: "status" },
  { title: "预警状态", key: "warningStatus" },
  { title: "创建时间", key: "createdAt" }
];

const els = {
  keywordInput: document.querySelector("#keywordInput"),
  customerInput: document.querySelector("#customerInput"),
  salespersonInput: document.querySelector("#salespersonInput"),
  orderTypeSelect: document.querySelector("#orderTypeSelect"),
  statusSelect: document.querySelector("#statusSelect"),
  warningStatusSelect: document.querySelector("#warningStatusSelect"),
  createdAtInput: document.querySelector("#createdAtInput"),
  typeSelect: document.querySelector("#typeSelect"),
  warehouseSelect: document.querySelector("#warehouseSelect"),
  pickupSelect: document.querySelector("#pickupSelect"),
  searchButton: document.querySelector("#searchButton"),
  resetButton: document.querySelector("#resetButton"),
  backButton: document.querySelector("#backButton"),
  exportButton: document.querySelector("#exportButton"),
  tableBody: document.querySelector("#tableBody"),
  resultSummary: document.querySelector("#resultSummary"),
  selectionInfo: document.querySelector("#selectionInfo"),
  selectAll: document.querySelector("#selectAll"),
  emptyState: document.querySelector("#emptyState"),
  overviewHead: document.querySelector("#overviewHead"),
  overviewBody: document.querySelector("#overviewBody"),
  overviewMeta: document.querySelector("#overviewMeta"),
  overviewCustomerSearch: document.querySelector("#overviewCustomerSearch"),
  overviewEmptyState: document.querySelector("#overviewEmptyState"),
  warehouseTabs: document.querySelectorAll(".warehouse-tab"),
  sortButtons: document.querySelectorAll(".sort-button"),
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

function parseDateTime(value) {
  const [datePart, timePart = "00:00:00"] = value.split(" ");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour = 0, minute = 0, second = 0] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute, second);
}

function getCurrentWeekPreorderWindow(referenceDate = new Date()) {
  const dayOfWeek = referenceDate.getDay();
  const daysSinceMonday = (dayOfWeek + 6) % 7;
  const monday = new Date(referenceDate);
  monday.setDate(referenceDate.getDate() - daysSinceMonday);
  monday.setHours(0, 0, 0, 0);

  const wednesday = new Date(monday);
  wednesday.setDate(monday.getDate() + 2);
  wednesday.setHours(23, 59, 59, 999);

  return { monday, wednesday };
}

function isNewPreorderInWindow(row, monday, wednesday) {
  const createdAt = parseDateTime(row.createdAt);
  return row.status === "预报" && createdAt >= monday && createdAt <= wednesday;
}

function getWarningStatus(row) {
  const { monday, wednesday } = getCurrentWeekPreorderWindow();
  const hasNewPreorder = rows.some((candidate) => {
    return candidate.customer === row.customer && candidate.warehouse === row.warehouse && isNewPreorderInWindow(candidate, monday, wednesday);
  });

  return hasNewPreorder ? "正常" : "异常";
}

function getRowsWithWarningStatus() {
  return rows.map((row) => ({
    ...row,
    warningStatus: getWarningStatus(row)
  }));
}

function formatMinute(value) {
  return value.slice(0, 16);
}

function getCellSummary(cellRows) {
  const latestRow = cellRows.reduce((latest, row) => {
    if (!latest) {
      return row;
    }

    return parseDateTime(row.createdAt) > parseDateTime(latest.createdAt) ? row : latest;
  }, null);

  return {
    latestAt: latestRow ? latestRow.createdAt : ""
  };
}

function getOverviewRows() {
  const filter = state.overviewCustomerFilter.toLowerCase();
  const customerNames = uniqueValues("customer")
    .filter((name) => !filter || name.toLowerCase().includes(filter));

  return customerNames
    .map((customer) => {
      const customerRows = rows.filter((row) => row.customer === customer);
      const warehouseCells = Object.fromEntries(
        warehouseOptions.map((warehouse) => {
          const cellRows = customerRows.filter((row) => row.warehouse === warehouse);
          return [warehouse, cellRows.length ? getCellSummary(cellRows) : null];
        })
      );
      const latestAt = customerRows.reduce((latest, row) => {
        if (!latest) {
          return row.createdAt;
        }

        return parseDateTime(row.createdAt) > parseDateTime(latest) ? row.createdAt : latest;
      }, "");

      return { customer, latestAt, warehouseCells };
    })
    .sort((a, b) => parseDateTime(b.latestAt) - parseDateTime(a.latestAt));
}

function drillToDetails(customer, warehouse) {
  switchTab("details");
  els.customerInput.value = customer;
  setActiveWarehouseTab(warehouse || "");
  applySearch();
}

function applyIncomingFilter() {
  const params = new URLSearchParams(window.location.search);
  const incomingFilter = window.incoming_filter || {
    customer_name: params.get("customer_name") || "",
    warehouse_name: params.get("warehouse_name") || ""
  };
  const view = params.get("view");

  if (incomingFilter.customer_name || incomingFilter.warehouse_name) {
    switchTab("details");
    els.customerInput.value = incomingFilter.customer_name || "";
    setActiveWarehouseTab(incomingFilter.warehouse_name || "");
    applySearch();
    return;
  }

  if (view === "details") {
    switchTab("details");
  }
}

window.incoming_filter = window.incoming_filter || null;

function renderOverview() {
  const overviewRows = getOverviewRows();
  els.overviewHead.innerHTML = `
    <tr>
      <th>客户名称</th>
      ${warehouseOptions.map((warehouse) => `<th>${escapeHtml(warehouse)}</th>`).join("")}
      <th>最新预报时间</th>
      <th>操作</th>
    </tr>
  `;
  els.overviewBody.innerHTML = overviewRows
    .map((row) => {
      const cells = warehouseOptions
        .map((warehouse) => {
          const summary = row.warehouseCells[warehouse];
          if (!summary) {
            return `<td class="matrix-empty">--</td>`;
          }

          return `
            <td>
              <button class="matrix-cell" type="button" data-customer="${escapeHtml(row.customer)}" data-warehouse="${escapeHtml(warehouse)}">
                <span class="matrix-time">${escapeHtml(formatMinute(summary.latestAt))}</span>
              </button>
            </td>
          `;
        })
        .join("");

      return `
        <tr>
          <th>${escapeHtml(row.customer)}</th>
          ${cells}
          <td class="matrix-latest">${escapeHtml(formatMinute(row.latestAt))}</td>
          <td>
            <button class="detail-link" type="button" data-customer="${escapeHtml(row.customer)}">查看明细</button>
          </td>
        </tr>
      `;
    })
    .join("");

  els.overviewMeta.textContent = `共 ${overviewRows.length} 个客户`;
  els.overviewEmptyState.hidden = overviewRows.length > 0;
}

function setActiveWarehouseTab(warehouse) {
  state.activeWarehouseTab = warehouse;
  els.warehouseSelect.value = warehouse;
  els.warehouseTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.warehouse === warehouse);
  });
}

function readFilters() {
  state.filters.keyword = els.keywordInput.value.trim().toLowerCase();
  state.filters.customer = els.customerInput.value.trim().toLowerCase();
  state.filters.salesperson = els.salespersonInput.value.trim().toLowerCase();
  state.filters.orderType = els.orderTypeSelect.value;
  state.filters.status = els.statusSelect.value;
  state.filters.warningStatus = els.warningStatusSelect.value;
  state.filters.createdAt = els.createdAtInput.value.trim().toLowerCase();
  state.filters.type = els.typeSelect.value;
  state.filters.warehouse = state.activeWarehouseTab || els.warehouseSelect.value;
  state.filters.pickup = els.pickupSelect.value;
}

function getFilteredRows() {
  const { keyword, customer, salesperson, orderType, status, warningStatus, createdAt, type, warehouse, pickup } = state.filters;

  return getRowsWithWarningStatus()
    .filter((row) => {
      const keywordMatch = !keyword || [row.bookingNo, row.containerNo, row.systemNo, row.customer, row.salesperson, row.orderType, row.status, row.warningStatus, row.createdAt].some((value) => value.toLowerCase().includes(keyword));
      const customerMatch = !customer || row.customer.toLowerCase().includes(customer);
      const salespersonMatch = !salesperson || row.salesperson.toLowerCase().includes(salesperson);
      const orderTypeMatch = !orderType || row.orderType === orderType;
      const statusMatch = !status || row.status === status;
      const warningStatusMatch = !warningStatus || row.warningStatus === warningStatus;
      const createdAtMatch = !createdAt || row.createdAt.toLowerCase().includes(createdAt);
      const typeMatch = !type || row.type === type;
      const warehouseMatch = !warehouse || row.warehouse === warehouse;
      const pickupMatch = !pickup || row.pickup === pickup;

      return keywordMatch && customerMatch && salespersonMatch && orderTypeMatch && statusMatch && warningStatusMatch && createdAtMatch && typeMatch && warehouseMatch && pickupMatch;
    })
    .sort((a, b) => {
      if (!state.sortKey || !state.sortDirection) {
        return 0;
      }

      const result = String(a[state.sortKey]).localeCompare(String(b[state.sortKey]));
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
          <td class="asset-cell">${linkCell(row.containerNo)}</td>
          <td class="asset-cell" title="${escapeHtml(row.systemNo)}">${escapeHtml(row.systemNo)}</td>
          <td title="${escapeHtml(row.salesperson)}">${escapeHtml(row.salesperson)}</td>
          <td title="${escapeHtml(row.orderType)}">${escapeHtml(row.orderType)}</td>
          <td><span class="status-badge status-badge-strong">${escapeHtml(row.status)}</span></td>
          <td title="${escapeHtml(row.createdAt)}">${escapeHtml(row.createdAt)}</td>
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

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\r\n]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }

  return text;
}

function getExportFileName() {
  const timestamp = new Date()
    .toISOString()
    .slice(0, 19)
    .replaceAll("-", "")
    .replace("T", "_")
    .replaceAll(":", "");
  return `循环柜预警_${timestamp}.csv`;
}

function exportRows() {
  readFilters();
  const visibleRows = getFilteredRows();
  const header = exportColumns.map((column) => csvCell(column.title)).join(",");
  const body = visibleRows.map((row, index) => {
    return exportColumns
      .map((column) => {
        const value = column.getValue ? column.getValue(row, index) : row[column.key];
        return csvCell(value);
      })
      .join(",");
  });

  const blob = new Blob([`\ufeff${[header, ...body].join("\r\n")}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getExportFileName();
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function resetSearch() {
  els.keywordInput.value = "";
  els.customerInput.value = "";
  els.salespersonInput.value = "";
  els.orderTypeSelect.value = "";
  els.statusSelect.value = "";
  els.warningStatusSelect.value = "";
  els.createdAtInput.value = "";
  els.typeSelect.value = "";
  els.warehouseSelect.value = "";
  els.pickupSelect.value = "";
  state.selected.clear();
  applySearch();
}

function switchTab(tabName) {
  document.querySelectorAll(".page-shell").forEach(function (panel) {
    panel.hidden = panel.id !== "tab-" + tabName;
  });

  if (tabName === "overview") {
    renderOverview();
  }
}

function bindEvents() {
  els.tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      switchTab(btn.dataset.tab);
    });
  });
  els.backButton.addEventListener("click", () => switchTab("overview"));
  els.overviewCustomerSearch.addEventListener("change", () => {
    state.overviewCustomerFilter = els.overviewCustomerSearch.value;
    renderOverview();
  });
  els.searchButton.addEventListener("click", applySearch);
  els.resetButton.addEventListener("click", resetSearch);
  els.exportButton.addEventListener("click", exportRows);

  els.overviewBody.addEventListener("click", (event) => {
    const cellButton = event.target.closest(".matrix-cell");
    if (cellButton) {
      drillToDetails(cellButton.dataset.customer, cellButton.dataset.warehouse);
      return;
    }

    const detailButton = event.target.closest(".detail-link");
    if (detailButton) {
      drillToDetails(detailButton.dataset.customer, "");
    }
  });

  [els.keywordInput, els.customerInput, els.salespersonInput, els.createdAtInput].forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        applySearch();
      }
    });
  });

  [els.orderTypeSelect, els.statusSelect, els.warningStatusSelect, els.typeSelect, els.pickupSelect].forEach((select) => {
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

  els.warehouseTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveWarehouseTab(tab.dataset.warehouse);
      applySearch();
    });
  });

  els.warehouseSelect.addEventListener("change", () => {
    setActiveWarehouseTab(els.warehouseSelect.value);
    applySearch();
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

  els.sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextSortKey = button.dataset.sort;
      state.sortDirection = state.sortKey === nextSortKey && state.sortDirection === "desc" ? "asc" : "desc";
      state.sortKey = nextSortKey;

      els.sortButtons.forEach((sortButton) => {
        const isActive = sortButton.dataset.sort === state.sortKey;
        sortButton.classList.toggle("asc", isActive && state.sortDirection === "asc");
        sortButton.classList.toggle("desc", isActive && state.sortDirection === "desc");
      });

      renderTable();
    });
  });
}

function init() {
  fillSelect(els.overviewCustomerSearch, uniqueValues("customer"));
  fillSelect(els.orderTypeSelect, uniqueValues("orderType"));
  fillSelect(els.statusSelect, statusOptions);
  fillSelect(els.warningStatusSelect, warningStatusOptions);
  fillSelect(els.typeSelect, uniqueValues("type"));
  fillSelect(els.warehouseSelect, warehouseOptions);
  fillSelect(els.pickupSelect, uniqueValues("pickup"));
  bindEvents();
  renderOverview();
  applySearch();
  applyIncomingFilter();
}

init();
