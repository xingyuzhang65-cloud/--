const companyRows = [
  ["SSC", "睿麦供应链", "客户", "美元", "XIAO", "3312463430", "天晟", "启用", "2026-07-07 09:54:52", ""],
  ["YQKJ", "深圳市翼卿科技有限公司", "客户", "美元", "Nick", "13106872093", "Marvin", "启用", "2026-07-06 12:08:54", ""],
  ["YSHWC", "优速美国海外仓", "客户", "美元", "Derek", "6266607999", "Cathy", "启用", "2026-07-02 11:52:05", "2026-07-03 18:12:48"],
  ["HHD", "上海恒汇达国际物流有限公司", "客户", "美元", "张妃妃", "19963936440", "jessie", "启用", "2026-06-01 16:55:53", "2026-06-02 18:22:55"],
  ["KC", "义乌市开臣国际货运代理有限公司", "客户", "美元", "熊旭", "18757872933", "Leah", "启用", "2026-05-29 14:08:51", "2026-06-02 09:43:32"],
  ["YL", "深圳永利八达通物流科技有限公司", "客户", "美元", "李坤", "18316995693", "Tina", "启用", "2026-05-25 15:30:50", ""],
  ["KMY", "深圳科美优国际物流有限公司", "客户", "美元", "刘东旭", "18929133176", "Tina", "启用", "2026-05-20 16:59:05", ""],
  ["LH", "深圳市领航供应链有限公司", "客户", "美元", "luna", "15626264056", "Leah", "启用", "2026-05-20 09:35:19", "2026-05-20 16:14:04"],
  ["SHXY", "上海信越国际货运代理有限公司", "客户", "美元", "徐静", "17277963413", "jessie", "启用", "2026-05-20 09:23:23", "2026-06-06 17:39:16"],
  ["MZ", "义乌美舟国际供应链有限公司", "客户", "美元", "李杨", "18616319631", "天晟", "启用", "2026-05-18 17:00:46", ""],
  ["EX", "EX", "客户", "美元", "EXTRANS LOGISTICS IN", "EXTRANS LOGISTICS IN", "公司", "启用", "2026-05-06 12:10:53", "2026-05-13 10:41:05"],
  ["DHX", "广东大海星国际物流有限公司", "客户", "美元", "陈志慧", "18938649119", "天晟", "启用", "2026-04-28 17:19:53", "2026-04-29 15:23:25"],
  ["SM", "广东速迈通物流科技有限公司", "客户", "美元", "鹏鹏琪", "18824342594", "Tina", "启用", "2026-04-27 14:38:36", ""],
  ["LZ", "义乌市凌智国际货运代理有限公司", "客户", "美元", "邢国权", "13858575670", "jessie", "启用", "2026-04-27 09:25:25", "2026-04-27 14:21:23"],
  ["OCX", "欧驰行（深圳）供应链管理有限公司", "客户", "美元", "黄兵", "18682469814", "Cathy", "启用", "2026-04-17 14:31:29", ""],
  ["XG", "深圳新享供应链管理有限公司", "客户", "美元", "杨欢", "18820917425", "Cathy", "启用", "2026-04-13 14:55:17", ""],
  ["M06", "奥克兰仓", "客户", "-", "", "1233333", "", "启用", "2026-04-03 18:37:23", ""],
  ["LONGM", "LONGMLOGISTICS INC", "客户", "美元", "Jing", "626-200-4360", "公司", "启用", "2026-04-01 09:54:36", "2026-04-01 10:05:35"],
  ["YWTT", "义乌市同天国际货运代理有限公司", "客户", "美元", "庄志鹏", "18266966340", "jessie", "启用", "2026-03-31 10:41:28", "2026-04-08 11:44:45"],
  ["MYYC", "深圳市美优云仓科技物流有限公司", "客户", "美元", "朱莹文", "13538296063", "公司", "启用", "2026-03-27 16:13:48", "2026-03-30 17:46:27"],
  ["YX", "浙江云象国际货运代理有限公司", "客户", "美元", "李蓝天", "13588343067", "jessie", "启用", "2026-03-20 11:32:49", "2026-03-21 14:21:35"],
  ["HD", "广东恒达国际物流有限公司", "客户", "美元", "欧运劲", "18680591911", "Tina", "启用", "2026-03-18 10:59:30", "2026-03-24 17:23:25"],
  ["FLSG", "深圳市方联综合供应链有限公司", "客户", "美元", "吴硕", "15920065923", "Jamie", "启用", "2026-03-17 10:15:38", "2026-03-18 15:08:06"],
  ["HSF", "中山市海上飞供应链管理有限公司", "客户", "美元", "周银银", "15989791267", "Tina", "启用", "2026-03-16 17:04:17", "2026-03-19 12:08:57"],
  ["BEDENNO", "BEDENNO INC", "客户", "美元", "Chun Feng Han", "909-319-3819", "James", "启用", "2026-03-12 16:51:44", ""],
  ["KORN", "KORN", "客户", "美元", "David", "123456", "天晟", "启用", "2026-03-05 13:57:05", "2026-04-01 08:51:18"]
].map(([code, name, type, currency, contact, phone, owner, status, openedAt, firstOrderAt], index) => ({
  code,
  customerCode: `MC${String(index + 1).padStart(6, "0")}`,
  name,
  type,
  currency,
  contact,
  phone,
  owner,
  status,
  openedAt,
  firstOrderAt
}));

const totalCompanyCount = 209;
const els = {
  code: document.querySelector("#companyCodeFilter"),
  customerCode: document.querySelector("#companyCustomerCodeFilter"),
  name: document.querySelector("#companyNameFilter"),
  type: document.querySelector("#companyTypeFilter"),
  status: document.querySelector("#companyStatusFilter"),
  search: document.querySelector("#companySearchButton"),
  reset: document.querySelector("#companyResetButton"),
  selectAll: document.querySelector("#companySelectAll"),
  body: document.querySelector("#companyTableBody"),
  empty: document.querySelector("#companyEmptyState"),
  total: document.querySelector("#companyTotalText")
};

let visibleRows = companyRows.slice();

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCompanyTable() {
  els.body.innerHTML = visibleRows.map((row, index) => `
    <tr>
      <td class="index-col">${index + 1}</td>
      <td class="check-col"><input class="company-row-check" type="checkbox" aria-label="选择 ${escapeHtml(row.code)}" /></td>
      <td>${escapeHtml(row.code)}</td>
      <td>${escapeHtml(row.customerCode)}</td>
      <td title="${escapeHtml(row.name)}">${escapeHtml(row.name)}</td>
      <td>${escapeHtml(row.type)}</td>
      <td>${escapeHtml(row.currency)}</td>
      <td title="${escapeHtml(row.contact)}">${escapeHtml(row.contact)}</td>
      <td title="${escapeHtml(row.phone)}">${escapeHtml(row.phone)}</td>
      <td>${escapeHtml(row.owner)}</td>
      <td><span class="company-status-badge">${escapeHtml(row.status)}</span></td>
      <td>${escapeHtml(row.openedAt)}</td>
      <td>${escapeHtml(row.firstOrderAt)}</td>
      <td class="company-actions">
        <button type="button">查看</button>
        <button type="button">编辑</button>
        <button class="danger" type="button">禁用</button>
        <button class="danger" type="button">删除</button>
      </td>
    </tr>
  `).join("");
  els.empty.hidden = visibleRows.length > 0;
  els.total.textContent = `共 ${totalCompanyCount} 条`;
  els.selectAll.checked = false;
}

function applyFilters() {
  const code = els.code.value.trim().toLowerCase();
  const customerCode = els.customerCode.value.trim().toLowerCase();
  const name = els.name.value.trim().toLowerCase();
  visibleRows = companyRows.filter((row) => (
    (!code || row.code.toLowerCase().includes(code)) &&
    (!customerCode || row.customerCode.toLowerCase().includes(customerCode)) &&
    (!name || row.name.toLowerCase().includes(name)) &&
    (!els.type.value || row.type === els.type.value) &&
    (!els.status.value || row.status === els.status.value)
  ));
  renderCompanyTable();
}

els.search.addEventListener("click", applyFilters);
els.reset.addEventListener("click", () => {
  els.code.value = "";
  els.customerCode.value = "";
  els.name.value = "";
  els.type.value = "";
  els.status.value = "";
  visibleRows = companyRows.slice();
  renderCompanyTable();
});
[els.code, els.customerCode, els.name].forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      applyFilters();
    }
  });
});
els.selectAll.addEventListener("change", () => {
  document.querySelectorAll(".company-row-check").forEach((checkbox) => {
    checkbox.checked = els.selectAll.checked;
  });
});

renderCompanyTable();
