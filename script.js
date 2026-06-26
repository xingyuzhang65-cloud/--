const rows = [
  // ── TTTX ──
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-14 23:07:40", bookingNo: "REQ260610-0002-MW-TTTX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 8, transit: "", type: "40HQ", containerNo: "CCLU7400926", systemNo: "CCLU7400926-260623", totalBoxes: 8, volume: 608, weight: 22000 },
  { customer: "TTTX", salesperson: "Tina", orderType: "普单", status: "接受", createdAt: "2026-06-14 22:43:03", bookingNo: "REQ260610-0001-MW-TTTX", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 16, transit: "", type: "40HQ", containerNo: "TCNU5379926", systemNo: "TCNU5379926-260623", totalBoxes: 16, volume: 1216, weight: 44000 },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "接受", createdAt: "2026-06-11 19:44:02", bookingNo: "REQ260608-0011-MW-TTTX", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 20, transit: "", type: "40HQ", containerNo: "MSNU9066272", systemNo: "MSNU9066272-260615", totalBoxes: 20, volume: 1520, weight: 56000 },
  { customer: "TTTX", salesperson: "Cathy", orderType: "普单", status: "运输中", createdAt: "2026-06-11 17:12:45", bookingNo: "REQ260608-0007-MW-TTTX", pickup: "码头", warehouse: "洛杉矶仓", dock: "长滩", rail: "", quantity: 15, transit: "", type: "40HQ", containerNo: "DFSU7790127", systemNo: "DFSU7790127-260623", totalBoxes: 15, volume: 1140, weight: 42000 },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "预约池", createdAt: "2026-06-11 15:33:19", bookingNo: "REQ260608-0006-MW-TTTX", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "芝加哥站", quantity: 16, transit: "", type: "40HQ", containerNo: "OOCU5524700", systemNo: "OOCU5524700-260623", totalBoxes: 16, volume: 1216, weight: 44800 },
  { customer: "TTTX", salesperson: "Cathy", orderType: "普单", status: "提柜", createdAt: "2026-06-10 20:17:50", bookingNo: "REQ260608-0005-MW-TTTX", pickup: "码头", warehouse: "新泽西仓", dock: "纽瓦克", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "CSNU8682381", systemNo: "CSNU8682381-260623", totalBoxes: 12, volume: 912, weight: 33600 },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "入库处理中", createdAt: "2026-06-10 18:49:36", bookingNo: "REQ260608-0004-MW-TTTX", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "萨凡纳站", quantity: 8, transit: "", type: "40HQ", containerNo: "OOCU5418870", systemNo: "OOCU5418870-260623", totalBoxes: 8, volume: 608, weight: 22400 },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-10 16:25:11", bookingNo: "REQ260608-0003-MW-TTTX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 18, transit: "", type: "40HQ", containerNo: "OOCU6137033", systemNo: "OOCU6137033-260623", totalBoxes: 18, volume: 1368, weight: 50400 },
  { customer: "TTTX", salesperson: "Cathy", orderType: "普单", status: "接受", createdAt: "2026-06-10 13:08:57", bookingNo: "REQ260608-0002-MW-TTTX", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 19, transit: "费城中转", type: "40HQ", containerNo: "FFAU2850840", systemNo: "FFAU2850840-260626", totalBoxes: 19, volume: 1444, weight: 53200 },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "运输中", createdAt: "2026-06-09 22:54:28", bookingNo: "REQ260608-0001-MW-TTTX", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "CSGU7187527", systemNo: "CSGU7187527-260623", totalBoxes: 12, volume: 912, weight: 33600 },
  { customer: "TTTX", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-14 14:22:10", bookingNo: "REQ260610-0003-MW-TTTX", pickup: "码头", warehouse: "休斯顿仓", dock: "休斯顿", rail: "", quantity: 14, transit: "", type: "40HQ", containerNo: "TGBU5012347", systemNo: "TGBU5012347-260623", totalBoxes: 14, volume: 1064, weight: 39200 },
  { customer: "TTTX", salesperson: "天晟", orderType: "加急单", status: "预报", createdAt: "2026-06-15 09:18:32", bookingNo: "REQ260612-0001-UR-TTTX", pickup: "火车站", warehouse: "奥克兰仓", dock: "", rail: "", quantity: 10, transit: "", type: "45HQ", containerNo: "MSCU8234711", systemNo: "MSCU8234711-260630", totalBoxes: 10, volume: 860, weight: 29000 },
  { customer: "TTTX", salesperson: "Tina", orderType: "普单", status: "运输中", createdAt: "2026-06-09 14:05:19", bookingNo: "REQ260606-0012-MW-TTTX", pickup: "码头", warehouse: "芝加哥仓", dock: "芝加哥", rail: "", quantity: 13, transit: "", type: "40GP", containerNo: "TCNU9238467", systemNo: "TCNU9238467-260620", totalBoxes: 13, volume: 871, weight: 33800 },
  // ── SLGYL ──
  { customer: "SLGYL", salesperson: "jessie", orderType: "普单", status: "运输中", createdAt: "2026-06-13 01:46:51", bookingNo: "REQ260610-0001-MW-SLGYL", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 12, transit: "", type: "45HQ", containerNo: "GOSU1053503", systemNo: "GOSU1053503-260623", totalBoxes: 12, volume: 1032, weight: 33600 },
  { customer: "SLGYL", salesperson: "Cathy", orderType: "普单", status: "入库处理中", createdAt: "2026-06-08 17:42:13", bookingNo: "REQ260606-0004-MW-SLGYL", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 10, transit: "", type: "40GP", containerNo: "TCLU1297334", systemNo: "TCLU1297334-260615", totalBoxes: 10, volume: 670, weight: 26000 },
  { customer: "SLGYL", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-08 15:05:26", bookingNo: "REQ260606-0003-MW-SLGYL", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 11, transit: "", type: "40GP", containerNo: "CXRU1004834", systemNo: "CXRU1004834-260615", totalBoxes: 11, volume: 737, weight: 28600 },
  { customer: "SLGYL", salesperson: "jessie", orderType: "普单", status: "接受", createdAt: "2026-06-14 16:22:37", bookingNo: "REQ260611-0003-MW-SLGYL", pickup: "码头", warehouse: "休斯顿仓", dock: "休斯顿", rail: "", quantity: 7, transit: "", type: "40HQ", containerNo: "MSCU7654398", systemNo: "MSCU7654398-260625", totalBoxes: 7, volume: 532, weight: 19600 },
  { customer: "SLGYL", salesperson: "Cathy", orderType: "普单", status: "提柜", createdAt: "2026-06-10 09:33:50", bookingNo: "REQ260607-0005-MW-SLGYL", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "芝加哥站", quantity: 9, transit: "", type: "40HQ", containerNo: "HLCU1948235", systemNo: "HLCU1948235-260618", totalBoxes: 9, volume: 684, weight: 25200 },
  { customer: "SLGYL", salesperson: "jessie", orderType: "加急单", status: "预约池", createdAt: "2026-06-12 21:11:04", bookingNo: "REQ260609-0004-UR-SLGYL", pickup: "码头", warehouse: "奥克兰仓", dock: "奥克兰", rail: "", quantity: 5, transit: "", type: "40RH", containerNo: "ONEU3498712", systemNo: "ONEU3498712-260622", totalBoxes: 5, volume: 340, weight: 14000 },
  // ── YQP ──
  { customer: "YQP", salesperson: "天晟", orderType: "普单", status: "预约池", createdAt: "2026-06-12 18:35:22", bookingNo: "REQ260610-0001-MW-YQP", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 11, transit: "", type: "40RH", containerNo: "SEKU9431682", systemNo: "SEKU9431682-260618", totalBoxes: 11, volume: 836, weight: 30800 },
  { customer: "YQP", salesperson: "Tina", orderType: "普单", status: "运输中", createdAt: "2026-06-13 08:44:17", bookingNo: "REQ260611-0001-MW-YQP", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 8, transit: "", type: "40HQ", containerNo: "CSLU7823456", systemNo: "CSLU7823456-260625", totalBoxes: 8, volume: 608, weight: 22400 },
  { customer: "YQP", salesperson: "天晟", orderType: "加急单", status: "预报", createdAt: "2026-06-14 10:20:55", bookingNo: "REQ260612-0002-UR-YQP", pickup: "码头", warehouse: "洛杉矶仓", dock: "长滩", rail: "", quantity: 6, transit: "", type: "45HQ", containerNo: "FFAU6521890", systemNo: "FFAU6521890-260628", totalBoxes: 6, volume: 516, weight: 17400 },
  // ── JJGJ ──
  { customer: "JJGJ", salesperson: "jessie", orderType: "普单", status: "提柜", createdAt: "2026-06-12 16:20:08", bookingNo: "REQ260609-0001-MW-JJGJ", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 3, transit: "", type: "40HQ", containerNo: "CAAU8732748", systemNo: "CAAU8732748-260710", totalBoxes: 3, volume: 228, weight: 8400 },
  { customer: "JJGJ", salesperson: "jessie", orderType: "普单", status: "运输中", createdAt: "2026-06-11 10:58:41", bookingNo: "REQ260608-0009-MW-JJGJ", pickup: "码头", warehouse: "萨凡纳仓", dock: "萨凡纳", rail: "", quantity: 5, transit: "", type: "40GP", containerNo: "CXRU4578231", systemNo: "CXRU4578231-260620", totalBoxes: 5, volume: 335, weight: 13000 },
  // ── RX ──
  { customer: "RX", salesperson: "Cathy", orderType: "普单", status: "入库处理中", createdAt: "2026-06-12 14:58:31", bookingNo: "REQ260609-0001-MW-RX", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "SMCU7009844", systemNo: "SMCU7009844-260615", totalBoxes: 12, volume: 912, weight: 33600 },
  { customer: "RX", salesperson: "jessie", orderType: "普单", status: "预报", createdAt: "2026-06-11 21:06:17", bookingNo: "REQ260608-0001-MW-RX", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 10, transit: "", type: "40HQ", containerNo: "ONEU6740504", systemNo: "ONEU6740504-260615", totalBoxes: 10, volume: 760, weight: 28000 },
  { customer: "RX", salesperson: "Cathy", orderType: "普单", status: "运输中", createdAt: "2026-06-12 09:10:33", bookingNo: "REQ260609-0002-MW-RX", pickup: "火车站", warehouse: "奥克兰仓", dock: "", rail: "", quantity: 9, transit: "", type: "40HQ", containerNo: "BMOU4123895", systemNo: "BMOU4123895-260615", totalBoxes: 9, volume: 684, weight: 25200 },
  { customer: "RX", salesperson: "Cathy", orderType: "普单", status: "接受", createdAt: "2026-06-14 19:36:12", bookingNo: "REQ260612-0004-MW-RX", pickup: "码头", warehouse: "休斯顿仓", dock: "休斯顿", rail: "", quantity: 11, transit: "", type: "40HQ", containerNo: "DFSU9982134", systemNo: "DFSU9982134-260628", totalBoxes: 11, volume: 836, weight: 30800 },
  // ── SHXY ──
  { customer: "SHXY", salesperson: "Tina", orderType: "普单", status: "预约池", createdAt: "2026-06-09 20:31:04", bookingNo: "REQ260606-0002-MW-SHXY", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 4, transit: "", type: "40GP", containerNo: "TTNU8336962", systemNo: "TTNU8336962-260615", totalBoxes: 4, volume: 268, weight: 10400 },
  { customer: "SHXY", salesperson: "jessie", orderType: "普单", status: "提柜", createdAt: "2026-06-09 18:16:39", bookingNo: "REQ260606-0001-MW-SHXY", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 3, transit: "", type: "40GP", containerNo: "CGMU5822559", systemNo: "CGMU5822559-260615", totalBoxes: 3, volume: 201, weight: 7800 },
  { customer: "SHXY", salesperson: "jessie", orderType: "普单", status: "接受", createdAt: "2026-06-13 11:45:08", bookingNo: "REQ260607-0001-MW-SHXY", pickup: "火车站", warehouse: "休斯顿仓", dock: "", rail: "", quantity: 6, transit: "", type: "40GP", containerNo: "HLXU8201749", systemNo: "HLXU8201749-260615", totalBoxes: 6, volume: 402, weight: 15600 },
  { customer: "SHXY", salesperson: "Tina", orderType: "加急单", status: "预报", createdAt: "2026-06-15 11:02:33", bookingNo: "REQ260613-0001-UR-SHXY", pickup: "码头", warehouse: "芝加哥仓", dock: "芝加哥", rail: "", quantity: 4, transit: "", type: "45HQ", containerNo: "TGBU3487129", systemNo: "TGBU3487129-260630", totalBoxes: 4, volume: 344, weight: 11600 },
  // ── HXWL (新客户) ──
  { customer: "HXWL", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-15 08:35:10", bookingNo: "REQ260613-0002-MW-HXWL", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "BMOU5123894", systemNo: "BMOU5123894-260701", totalBoxes: 12, volume: 912, weight: 33600 },
  { customer: "HXWL", salesperson: "天晟", orderType: "普单", status: "接受", createdAt: "2026-06-14 07:22:48", bookingNo: "REQ260611-0005-MW-HXWL", pickup: "码头", warehouse: "新泽西仓", dock: "纽瓦克", rail: "", quantity: 15, transit: "", type: "40HQ", containerNo: "OOCU7523198", systemNo: "OOCU7523198-260625", totalBoxes: 15, volume: 1140, weight: 42000 },
  { customer: "HXWL", salesperson: "天晟", orderType: "普单", status: "运输中", createdAt: "2026-06-10 14:51:22", bookingNo: "REQ260607-0007-MW-HXWL", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "萨凡纳站", quantity: 9, transit: "亚特兰大中转", type: "40GP", containerNo: "TCNU4712559", systemNo: "TCNU4712559-260618", totalBoxes: 9, volume: 603, weight: 23400 },
  // ── JXGJ (新客户) ──
  { customer: "JXGJ", salesperson: "Cathy", orderType: "普单", status: "预报", createdAt: "2026-06-14 20:15:04", bookingNo: "REQ260612-0005-MW-JXGJ", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "", quantity: 14, transit: "", type: "40HQ", containerNo: "MSCU3829104", systemNo: "MSCU3829104-260626", totalBoxes: 14, volume: 1064, weight: 39200 },
  { customer: "JXGJ", salesperson: "Cathy", orderType: "普单", status: "预约池", createdAt: "2026-06-13 16:48:33", bookingNo: "REQ260610-0005-MW-JXGJ", pickup: "码头", warehouse: "奥克兰仓", dock: "奥克兰", rail: "", quantity: 7, transit: "", type: "40HQ", containerNo: "ONEU2198457", systemNo: "ONEU2198457-260624", totalBoxes: 7, volume: 532, weight: 19600 },
  // ── ZJMY (新客户) ──
  { customer: "ZJMY", salesperson: "jessie", orderType: "普单", status: "预报", createdAt: "2026-06-15 13:09:56", bookingNo: "REQ260613-0003-MW-ZJMY", pickup: "火车站", warehouse: "休斯顿仓", dock: "", rail: "", quantity: 16, transit: "", type: "45HQ", containerNo: "HLCU6723489", systemNo: "HLCU6723489-260702", totalBoxes: 16, volume: 1376, weight: 46400 },
  { customer: "ZJMY", salesperson: "jessie", orderType: "加急单", status: "接受", createdAt: "2026-06-14 12:37:21", bookingNo: "REQ260611-0006-UR-ZJMY", pickup: "码头", warehouse: "洛杉矶仓", dock: "长滩", rail: "", quantity: 8, transit: "", type: "40RH", containerNo: "CSNU4456723", systemNo: "CSNU4456723-260625", totalBoxes: 8, volume: 544, weight: 22400 },
  { customer: "ZJMY", salesperson: "jessie", orderType: "普单", status: "运输中", createdAt: "2026-06-09 08:10:44", bookingNo: "REQ260606-0007-MW-ZJMY", pickup: "火车站", warehouse: "新泽西仓", dock: "", rail: "", quantity: 11, transit: "", type: "40HQ", containerNo: "FFAU1982347", systemNo: "FFAU1982347-260618", totalBoxes: 11, volume: 836, weight: 30800 },
  // ── BLT (新客户) ──
  { customer: "BLT", salesperson: "Tina", orderType: "普单", status: "预报", createdAt: "2026-06-14 17:44:18", bookingNo: "REQ260612-0003-MW-BLT", pickup: "码头", warehouse: "萨凡纳仓", dock: "萨凡纳", rail: "", quantity: 13, transit: "", type: "40HQ", containerNo: "CXRU7812459", systemNo: "CXRU7812459-260627", totalBoxes: 13, volume: 988, weight: 36400 },
  { customer: "BLT", salesperson: "Tina", orderType: "普单", status: "提柜", createdAt: "2026-06-11 06:29:37", bookingNo: "REQ260608-0010-MW-BLT", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 5, transit: "", type: "40GP", containerNo: "GESU5498213", systemNo: "GESU5498213-260620", totalBoxes: 5, volume: 335, weight: 13000 },
  // ── HGKY (新客户) ──
  { customer: "HGKY", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-15 10:46:02", bookingNo: "REQ260613-0004-MW-HGKY", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "芝加哥站", quantity: 10, transit: "", type: "40HQ", containerNo: "MSCU9472156", systemNo: "MSCU9472156-260703", totalBoxes: 10, volume: 760, weight: 28000 },
  { customer: "HGKY", salesperson: "天晟", orderType: "加急单", status: "入库处理中", createdAt: "2026-06-12 03:15:42", bookingNo: "REQ260609-0005-UR-HGKY", pickup: "码头", warehouse: "奥克兰仓", dock: "奥克兰", rail: "", quantity: 6, transit: "旧金山中转", type: "40HQ", containerNo: "SEKU6721034", systemNo: "SEKU6721034-260622", totalBoxes: 6, volume: 456, weight: 16800 },
  // ── XMHT (新客户) ──
  { customer: "XMHT", salesperson: "Cathy", orderType: "普单", status: "预报", createdAt: "2026-06-14 22:08:29", bookingNo: "REQ260612-0006-MW-XMHT", pickup: "码头", warehouse: "新泽西仓", dock: "纽瓦克", rail: "", quantity: 9, transit: "", type: "45HQ", containerNo: "TTNU6723401", systemNo: "TTNU6723401-260627", totalBoxes: 9, volume: 774, weight: 26100 },
  { customer: "XMHT", salesperson: "Cathy", orderType: "普单", status: "接受", createdAt: "2026-06-13 09:52:15", bookingNo: "REQ260610-0006-MW-XMHT", pickup: "火车站", warehouse: "休斯顿仓", dock: "", rail: "", quantity: 7, transit: "", type: "40HQ", containerNo: "OOLU8812945", systemNo: "OOLU8812945-260624", totalBoxes: 7, volume: 532, weight: 19600 },
  // ── DFWL (新客户) ──
  { customer: "DFWL", salesperson: "Tina", orderType: "普单", status: "预报", createdAt: "2026-06-15 14:55:03", bookingNo: "REQ260613-0005-MW-DFWL", pickup: "火车站", warehouse: "奥克兰仓", dock: "", rail: "", quantity: 11, transit: "", type: "40HQ", containerNo: "OOLU5591832", systemNo: "OOLU5591832-260704", totalBoxes: 11, volume: 836, weight: 30800 },
  { customer: "DFWL", salesperson: "Tina", orderType: "普单", status: "运输中", createdAt: "2026-06-10 11:23:50", bookingNo: "REQ260607-0008-MW-DFWL", pickup: "码头", warehouse: "洛杉矶仓", dock: "长滩", rail: "", quantity: 10, transit: "", type: "40GP", containerNo: "FSCU4871230", systemNo: "FSCU4871230-260619", totalBoxes: 10, volume: 670, weight: 26000 },
  // ── YRGY (新客户) ──
  { customer: "YRGY", salesperson: "jessie", orderType: "普单", status: "预报", createdAt: "2026-06-14 16:33:48", bookingNo: "REQ260612-0007-MW-YRGY", pickup: "火车站", warehouse: "洛杉矶仓", dock: "", rail: "", quantity: 15, transit: "", type: "40HQ", containerNo: "BMOU2938471", systemNo: "BMOU2938471-260628", totalBoxes: 15, volume: 1140, weight: 42000 },
  { customer: "YRGY", salesperson: "jessie", orderType: "普单", status: "预约池", createdAt: "2026-06-11 20:05:12", bookingNo: "REQ260608-0012-MW-YRGY", pickup: "码头", warehouse: "萨凡纳仓", dock: "萨凡纳", rail: "", quantity: 8, transit: "", type: "40HQ", containerNo: "ONEU4839201", systemNo: "ONEU4839201-260621", totalBoxes: 8, volume: 608, weight: 22400 },
  // ── JHT (新客户) ──
  { customer: "JHT", salesperson: "天晟", orderType: "普单", status: "预报", createdAt: "2026-06-15 09:25:37", bookingNo: "REQ260613-0006-MW-JHT", pickup: "火车站", warehouse: "萨凡纳仓", dock: "", rail: "", quantity: 12, transit: "", type: "40HQ", containerNo: "CSNU6028347", systemNo: "CSNU6028347-260701", totalBoxes: 12, volume: 912, weight: 33600 },
  { customer: "JHT", salesperson: "Cathy", orderType: "普单", status: "预报", createdAt: "2026-06-13 19:14:55", bookingNo: "REQ260610-0007-MW-JHT", pickup: "码头", warehouse: "休斯顿仓", dock: "休斯顿", rail: "", quantity: 10, transit: "", type: "40HQ", containerNo: "FCIU7782341", systemNo: "FCIU7782341-260625", totalBoxes: 10, volume: 760, weight: 28000 },
  // ── TJKD (新客户) ──
  { customer: "TJKD", salesperson: "Tina", orderType: "普单", status: "预报", createdAt: "2026-06-15 11:33:09", bookingNo: "REQ260613-0007-MW-TJKD", pickup: "码头", warehouse: "新泽西仓", dock: "纽瓦克", rail: "", quantity: 8, transit: "", type: "45HQ", containerNo: "NYKU4923105", systemNo: "NYKU4923105-260704", totalBoxes: 8, volume: 688, weight: 23200 },
  { customer: "TJKD", salesperson: "Tina", orderType: "加急单", status: "提柜", createdAt: "2026-06-10 15:42:19", bookingNo: "REQ260607-0009-UR-TJKD", pickup: "火车站", warehouse: "芝加哥仓", dock: "", rail: "芝加哥站", quantity: 5, transit: "", type: "40GP", containerNo: "HLXU3340912", systemNo: "HLXU3340912-260618", totalBoxes: 5, volume: 335, weight: 13000 }
];

const warehouseOptions = ["洛杉矶仓", "芝加哥仓", "新泽西仓", "萨凡纳仓", "休斯顿仓", "奥克兰仓"];
const statusOptions = ["预报", "接受", "运输中", "预约池", "提柜", "入库处理中"];
const roleOptions = [
  { value: "admin", label: "管理员", isAdmin: true },
  { value: "天晟", label: "天晟", isAdmin: false },
  { value: "Tina", label: "Tina", isAdmin: false },
  { value: "jessie", label: "jessie", isAdmin: false },
  { value: "Cathy", label: "Cathy", isAdmin: false }
];

const auditWindow = {
  weekLabel: "2026-W24",
  weekStart: "2026-06-08 00:00:00",
  riskEnd: "2026-06-10 23:59:59",
  weekEnd: "2026-06-14 23:59:59",
  triggeredAt: "2026-06-11 00:00:00"
};

const state = {
  filters: {
    keyword: "",
    customer: "",
    salesperson: "",
    orderType: "",
    status: "",
    createdAt: "",
    type: "",
    warehouse: "",
    pickup: ""
  },
  selected: new Set(),
  activeWarehouseTab: "",
  boardStatus: "pending",
  boardCustomerFilter: "",
  boardSalespersonFilter: "",
  boardLatestTimeFrom: "",
  boardLatestTimeTo: "",
  boardWarningTimeFrom: "",
  boardWarningTimeTo: "",
  boardOperatorFilter: "",
  role: "admin",
  sortKey: "",
  sortDirection: "",
  boardSelected: new Set(),
  activeProgressCustomer: "",
  activeProgressIsPending: false,
  editingProgressId: "",
  editingDeletedAttachments: [],
  isBatchProgress: false,
  activeRemarkId: ""
};

const generatedWarnings = buildWarningRecords();
const warningStore = loadWarningStore();

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
  { title: "预报总箱数", key: "totalBoxes" },
  { title: "总体积", key: "volume" },
  { title: "重量", key: "weight" },
  { title: "业务员", key: "salesperson" },
  { title: "字段类型", key: "orderType" },
  { title: "运单状态", key: "status" },
  { title: "创建时间", key: "createdAt" }
];

const els = {
  roleSelect: document.querySelector("#roleSelect"),
  monitorWindowText: document.querySelector("#monitorWindowText"),
  runMeta: document.querySelector("#runMeta"),
  statusTabs: document.querySelector("#statusTabs"),
  countPending: document.querySelector("#countPending"),
  countProcessed: document.querySelector("#countProcessed"),
  countAll: document.querySelector("#countAll"),
  overviewCustomerSearch: document.querySelector("#overviewCustomerSearch"),
  overviewSalespersonSearch: document.querySelector("#overviewSalespersonSearch"),
  overviewOperatorSearch: document.querySelector("#overviewOperatorSearch"),
  overviewLatestTimeFrom: document.querySelector("#latestTimeFrom"),
  overviewLatestTimeTo: document.querySelector("#latestTimeTo"),
  overviewWarningTimeFrom: document.querySelector("#warningTimeFrom"),
  overviewWarningTimeTo: document.querySelector("#warningTimeTo"),
  latestTimeDisplay: document.querySelector("#latestTimeDisplay"),
  warningTimeDisplay: document.querySelector("#warningTimeDisplay"),
  latestTimeBox: document.querySelector("#latestTimeBox"),
  warningTimeBox: document.querySelector("#warningTimeBox"),
  latestTimeClear: document.querySelector("#latestTimeClear"),
  warningTimeClear: document.querySelector("#warningTimeClear"),
  boardSearchButton: document.querySelector("#boardSearchButton"),
  resetBoardButton: document.querySelector("#resetBoardButton"),
  alertBody: document.querySelector("#alertBody"),
  overviewEmptyState: document.querySelector("#overviewEmptyState"),
  customerInput: document.querySelector("#customerInput"),
  salespersonInput: document.querySelector("#salespersonInput"),
  orderTypeSelect: document.querySelector("#orderTypeSelect"),
  statusSelect: document.querySelector("#statusSelect"),
  createdAtInput: document.querySelector("#createdAtInput"),
  warehouseSelect: document.querySelector("#warehouseSelect"),
  searchButton: document.querySelector("#searchButton"),
  resetButton: document.querySelector("#resetButton"),
  backButton: document.querySelector("#backButton"),
  exportButton: document.querySelector("#exportButton"),
  exportSelectedButton: document.querySelector("#exportSelectedButton"),
  clearSelectionButton: document.querySelector("#clearSelectionButton"),
  boardSelectAll: document.querySelector("#boardSelectAll"),
  tableBody: document.querySelector("#tableBody"),
  resultSummary: document.querySelector("#resultSummary"),
  selectionInfo: document.querySelector("#selectionInfo"),
  selectAll: document.querySelector("#selectAll"),
  emptyState: document.querySelector("#emptyState"),
  warehouseTabs: document.querySelectorAll(".warehouse-tab"),
  sortButtons: document.querySelectorAll(".sort-button"),
  tabButtons: document.querySelectorAll(".tab-button"),
  boardListToolbar: document.querySelector("#boardListToolbar"),
  boardListSelectionInfo: document.querySelector("#boardListSelectionInfo"),
  boardListExportBtn: document.querySelector("#boardListExportBtn"),
  boardListBatchBtn: document.querySelector("#boardListBatchBtn"),
  boardListBatchRemarkBtn: document.querySelector("#boardListBatchRemarkBtn"),
  boardListViewLogBtn: document.querySelector("#boardListViewLogBtn"),
  logModal: document.querySelector("#logModal"),
  logModalClose: document.querySelector("#logModalClose"),
  logCustomerFilter: document.querySelector("#logCustomerFilter"),
  logTableBody: document.querySelector("#logTableBody"),
  logEmptyState: document.querySelector("#logEmptyState"),
  progressInput: document.querySelector("#progressInput"),
  progressAttachment: document.querySelector("#progressAttachment"),
  progressAttachmentName: document.querySelector("#progressAttachmentName"),
  progressSubmit: document.querySelector("#progressSubmit"),
  progressList: document.querySelector("#progressList"),
  progressEmpty: document.querySelector("#progressEmpty"),
  progressCustomerName: document.querySelector("#progressCustomerName"),
  progressUpdateBtn: document.querySelector("#progressUpdateBtn"),
  progressModal: document.querySelector("#progressModal"),
  progressModalClose: document.querySelector("#progressModalClose"),
  progressModalCustomerName: document.querySelector("#progressModalCustomerName"),
  progressCancelBtn: document.querySelector("#progressCancelBtn"),
  progressConfirmBtn: document.querySelector("#progressConfirmBtn"),
  progressEditAttachments: document.querySelector("#progressEditAttachments"),
  toast: document.querySelector("#toast"),
};

function parseDateTime(value) {
  const [datePart, timePart = "00:00:00"] = value.split(" ");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour = 0, minute = 0, second = 0] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute, second);
}

function isWithin(value, start, end) {
  const time = parseDateTime(value);
  return time >= parseDateTime(start) && time <= parseDateTime(end);
}

function formatMinute(value) {
  return value ? value.slice(0, 16) : "--";
}

function formatWarehouseTime(value) {
  return value || "--";
}

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

function getCustomerOwner(customer) {
  const customerRows = rows.filter((row) => row.customer === customer);
  const counts = customerRows.reduce((map, row) => {
    map[row.salesperson] = (map[row.salesperson] || 0) + 1;
    return map;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
}

function getLatestByWarehouse(customer) {
  return Object.fromEntries(
    warehouseOptions.map((warehouse) => {
      const latest = rows
        .filter((row) => row.customer === customer && row.warehouse === warehouse)
        .sort((a, b) => parseDateTime(b.createdAt) - parseDateTime(a.createdAt))[0];
      return [warehouse, latest?.createdAt || ""];
    })
  );
}

function getLatestPreorderTime(latestByWarehouse) {
  return Object.values(latestByWarehouse)
    .filter(Boolean)
    .sort((a, b) => parseDateTime(b) - parseDateTime(a))[0] || "";
}

function hasPreorderInRiskWindow(customer) {
  return rows.some((row) => {
    return (
      row.customer === customer &&
      warehouseOptions.includes(row.warehouse) &&
      row.status === "预报" &&
      isWithin(row.createdAt, auditWindow.weekStart, auditWindow.riskEnd)
    );
  });
}

function buildWarningRecords() {
  const customers = uniqueValues("customer");
  const records = customers
    .filter((customer) => !hasPreorderInRiskWindow(customer))
    .map((customer) => {
      const owner = getCustomerOwner(customer);
      const latestByWarehouse = getLatestByWarehouse(customer);
      return {
        id: `${auditWindow.weekLabel}-${customer}`,
        customer,
        salesperson: owner,
        status: "pending",
        weekLabel: auditWindow.weekLabel,
        latestByWarehouse,
        triggeredAt: auditWindow.triggeredAt,
        reason: "周一至周三六个核心仓均无新增循环柜预报",
        remark: "",
        processedAt: "",
        operator: "system"
      };
    });

  records.push({
    id: `${auditWindow.weekLabel}-JJGJ`,
    customer: "JJGJ",
    salesperson: "jessie",
    status: "processed",
    weekLabel: auditWindow.weekLabel,
    latestByWarehouse: getLatestByWarehouse("JJGJ"),
    triggeredAt: auditWindow.triggeredAt,
    reason: "周一至周三六个核心仓均无新增循环柜预报",
    remark: "已确认下周恢复洛杉矶仓循环柜。",
    processedAt: "2026-06-12 11:18:00",
    operator: "jessie"
  });

  const jxgj = records.find((record) => record.customer === "JXGJ");
  if (jxgj) {
    jxgj.status = "processed";
    jxgj.processedAt = "2026-06-11 15:42:00";
    jxgj.remark = "已联系客户确认，下周洛杉矶仓有两柜计划。";
    jxgj.triggeredAt = "2026-06-11 00:45:00";
    jxgj.operator = "Cathy";
  }

  const blt = records.find((record) => record.customer === "BLT");
  if (blt) {
    blt.status = "processed";
    blt.processedAt = "2026-06-12 09:10:00";
    blt.remark = "客户反馈暂停发货，预计7月恢复。";
    blt.triggeredAt = "2026-06-11 02:00:00";
    blt.operator = "Tina";
  }

  const jht = records.find((record) => record.customer === "JHT");
  if (jht) {
    jht.status = "processed";
    jht.processedAt = "2026-06-13 17:55:00";
    jht.remark = "已与客户确认，月底前恢复。";
    jht.triggeredAt = "2026-06-11 01:15:00";
    jht.operator = "天晟";
  }

  return dedupeById(records);
}

function dedupeById(records) {
  const map = new Map();
  records.forEach((record) => map.set(record.id, record));
  return [...map.values()];
}

function loadWarningStore() {
  try {
    // 版本控制: 清空旧缓存强制重新生成
    var version = localStorage.getItem("cycle-warning-version");
    if (version !== "v3") {
      localStorage.removeItem("cycle-warning-records");
      localStorage.removeItem("cycle-warning-logs");
      localStorage.setItem("cycle-warning-version", "v3");
      return generatedWarnings.filter((record) => record.status !== "overdue");
    }
    const saved = JSON.parse(localStorage.getItem("cycle-warning-records") || "[]");
    const merged = generatedWarnings.map((record) => {
      const override = saved.find((item) => item.id === record.id);
      return override ? { ...record, ...override } : record;
    });
    return merged.filter((record) => record.status !== "overdue");
  } catch (_error) {
    return generatedWarnings.filter((record) => record.status !== "overdue");
  }
}

function persistWarningStore() {
  localStorage.setItem("cycle-warning-records", JSON.stringify(warningStore));
}

// ── Log store ──

const logStore = loadLogStore();
const progressStore = loadProgressStore();

function buildInitialLogs() {
  return warningStore
    .filter((r) => r.status !== "pending" && r.status !== "overdue")
    .map((r) => ({
      id: `log-init-${r.id}`,
      warningId: r.id,
      customer: r.customer,
      oldStatus: "pending",
      newStatus: r.status,
      operator: "系统",
      timestamp: r.processedAt || r.triggeredAt || auditWindow.triggeredAt
    }));
}

function loadLogStore() {
  try {
    const saved = JSON.parse(localStorage.getItem("cycle-warning-logs") || "[]");
    const initialLogs = buildInitialLogs();
    const activeSaved = saved.filter((entry) => entry.oldStatus !== "overdue" && entry.newStatus !== "overdue");
    const savedIds = new Set(activeSaved.map((e) => e.id));
    const merged = [...activeSaved, ...initialLogs.filter((e) => !savedIds.has(e.id))];
    return merged.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  } catch (_error) {
    return buildInitialLogs();
  }
}

function persistLogStore() {
  localStorage.setItem("cycle-warning-logs", JSON.stringify(logStore));
}

function loadProgressStore() {
  try {
    var saved = JSON.parse(localStorage.getItem("cycle-warning-progress") || "[]");
    var ver = localStorage.getItem("cycle-warning-version");
    if (ver !== "v3") {
      localStorage.removeItem("cycle-warning-progress");
      saved = [];
    }
    var demo = [
      { id: "demo-1", customer: "JJGJ", content: "已确认下周恢复洛杉矶仓循环柜，预计两个柜。", attachments: [], operator: "jessie", timestamp: "2026-06-12 11:18:00" },
      { id: "demo-2", customer: "JXGJ", content: "电话联系客户确认，下周将有两票预报。", attachments: [], operator: "Cathy", timestamp: "2026-06-11 15:42:00" },
      { id: "demo-3", customer: "BLT", content: "客户反馈暂停发货，预计7月恢复。", attachments: [], operator: "Tina", timestamp: "2026-06-12 09:10:00" },
      { id: "demo-4", customer: "JHT", content: "已与客户确认，月底前恢复两个萨凡纳仓。", attachments: [], operator: "天晟", timestamp: "2026-06-13 17:55:00" },
      { id: "demo-5", customer: "TTTX", content: "Tim确认下周洛杉矶仓有新柜，芝加哥仓需协调火车站资源。", attachments: [], operator: "天晟", timestamp: "2026-06-14 10:30:00" },
      { id: "demo-6", customer: "SLGYL", content: "已邮件沟通，客户本周反馈预报计划。", attachments: [], operator: "jessie", timestamp: "2026-06-13 14:20:00" }
    ];
    var existing = new Set(saved.map(function (e) { return e.id; }));
    var changed = false;
    demo.forEach(function (d) { if (!existing.has(d.id)) { saved.push(d); changed = true; } });
    if (changed) { localStorage.setItem("cycle-warning-progress", JSON.stringify(saved)); }
    return saved;
  } catch (_error) {
    return [];
  }
}

function persistProgressStore() {
  localStorage.setItem("cycle-warning-progress", JSON.stringify(progressStore));
}

function getProgressEntries(customer) {
  return progressStore
    .filter((entry) => entry.customer === customer)
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
}

function resetProgressEditor() {
  state.editingProgressId = "";
  state.editingDeletedAttachments = [];
  if (els.progressInput) {
    els.progressInput.value = "";
  }
  if (els.progressAttachment) {
    els.progressAttachment.value = "";
  }
  if (els.progressAttachmentName) {
    els.progressAttachmentName.textContent = "未选择任何文件";
  }
  if (els.progressEditAttachments) {
    els.progressEditAttachments.innerHTML = "";
    els.progressEditAttachments.hidden = true;
  }
}

function renderProgress() {
  if (!els.progressList) { return; }
  if (els.progressCustomerName) {
    els.progressCustomerName.textContent = state.activeProgressCustomer ? "— " + state.activeProgressCustomer : "";
  }
  // 非待处理状态隐藏更新进度按钮和编辑/删除
  var isPending = state.activeProgressIsPending;
  if (els.progressUpdateBtn) {
    els.progressUpdateBtn.hidden = !isPending;
  }
  var entries = getProgressEntries(state.activeProgressCustomer);
  var showActions = isPending;
  els.progressEmpty.hidden = entries.length > 0;
  els.progressList.innerHTML = entries
    .map(function (entry) {
      // 兼容旧数据格式: attachments 可能是字符串数组 (仅名称) 或对象数组 (name+size)
      var attachmentItems = entry.attachments || [];
      var attachmentHtml = "";
      if (attachmentItems.length) {
        attachmentHtml = '<div class="progress-attachments">' +
          attachmentItems.map(function (item) {
            var name = typeof item === "string" ? item : item.name;
            var sizeText = (typeof item === "object" && item.size) ? " (" + formatFileSize(item.size) + ")" : "";
            return '<span title="' + escapeHtml(name) + sizeText + '">' + escapeHtml(name) + sizeText + '</span>';
          }).join("") +
          '</div>';
      }
      var actionsHtml = showActions
        ? '<div class="progress-item-actions">' +
            '<button class="progress-edit-btn" type="button" data-id="' + escapeHtml(entry.id) + '" title="编辑">编辑</button>' +
            '<button class="progress-delete-btn" type="button" data-id="' + escapeHtml(entry.id) + '" title="删除此条进度">删除</button>' +
          '</div>'
        : '';
      return (
        '<article class="progress-item">' +
          '<div class="progress-dot" aria-hidden="true"></div>' +
          '<div class="progress-meta">' +
            '<strong>' + escapeHtml(entry.operator) + '</strong>' +
            '<span>' + escapeHtml(entry.timestamp) + '</span>' +
          '</div>' +
          '<div class="progress-content">' + escapeHtml(entry.content) + '</div>' +
          attachmentHtml +
          actionsHtml +
        '</article>'
      );
    })
    .join("");
}

function updateProgressAttachmentName() {
  if (!els.progressAttachmentName || !els.progressAttachment) { return; }
  const files = [...els.progressAttachment.files];
  els.progressAttachmentName.textContent = files.length
    ? files.map(function (file) { return file.name + " (" + formatFileSize(file.size) + ")"; }).join("、")
    : "未选择附件";
}

function submitProgress() {
  if (!els.progressInput) { return; }
  const content = els.progressInput.value.trim();
  if (!content) {
    showToast("请输入处理进度描述", "warning");
    return;
  }

  if (state.isBatchProgress) {
    // 批量模式: 为每个选中行创建进度
    var selectedIds = [...state.boardSelected];
    if (!selectedIds.length) { return; }
    var timestamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    var fileItems = els.progressAttachment
      ? [...els.progressAttachment.files].map(function (f) { return { name: f.name, size: f.size }; })
      : [];
    selectedIds.forEach(function (id) {
      var record = warningStore.find(function (r) { return r.id === id; });
      if (record) {
        progressStore.push({
          id: "progress-" + record.customer + "-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
          customer: record.customer,
          content: content,
          attachments: fileItems,
          operator: getRole().label,
          timestamp: timestamp
        });
      }
    });
    persistProgressStore();
    state.boardSelected.clear();
    state.isBatchProgress = false;
    showToast("✅ 已为 " + selectedIds.length + " 个客户批量添加进度", "success");
  } else if (state.editingProgressId) {
    // 编辑模式
    var entry = progressStore.find(function (e) { return e.id === state.editingProgressId; });
    if (entry) {
      entry.content = content;
      var oldItems = (entry.attachments || []).filter(function (_, index) {
        return !state.editingDeletedAttachments.includes(index);
      });
      var newItems = els.progressAttachment
        ? [...els.progressAttachment.files].map(function (file) { return { name: file.name, size: file.size }; })
        : [];
      entry.attachments = oldItems.concat(newItems);
      entry.timestamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    }
    showToast("✅ 进度修改成功", "success");
  } else if (state.activeProgressCustomer) {
    // 单条新增模式
    var fileItems2 = els.progressAttachment
      ? [...els.progressAttachment.files].map(function (file) { return { name: file.name, size: file.size }; })
      : [];
    progressStore.push({
      id: "progress-" + state.activeProgressCustomer + "-" + Date.now(),
      customer: state.activeProgressCustomer,
      content: content,
      attachments: fileItems2,
      operator: getRole().label,
      timestamp: new Date().toISOString().slice(0, 19).replace("T", " ")
    });
    showToast("✅ 进度更新成功", "success");
  }

  persistProgressStore();
  resetProgressEditor();
  closeProgressModal();
  renderProgress();
  renderBoard();
}

function renderEditAttachments(entry) {
  if (!els.progressEditAttachments) { return; }
  state.editingDeletedAttachments = [];
  var items = entry.attachments || [];
  if (!items.length) {
    els.progressEditAttachments.innerHTML = "";
    els.progressEditAttachments.hidden = true;
    return;
  }
  els.progressEditAttachments.hidden = false;
  els.progressEditAttachments.innerHTML =
    '<span class="progress-edit-attach-label">已有附件：</span>' +
    items.map(function (item, index) {
      var name = typeof item === "string" ? item : item.name;
      var sizeText = (typeof item === "object" && item.size) ? " (" + formatFileSize(item.size) + ")" : "";
      return (
        '<span class="progress-edit-attach-item" data-index="' + index + '">' +
          '<span class="progress-edit-attach-name" title="' + escapeHtml(name) + sizeText + '">' + escapeHtml(name) + sizeText + '</span>' +
          '<button class="progress-edit-attach-del" type="button" data-index="' + index + '" title="删除此附件">✕</button>' +
        '</span>'
      );
    }).join("");
}

function editProgressEntry(entryId) {
  var entry = progressStore.find(function (e) { return e.id === entryId; });
  if (!entry || !els.progressInput || !els.progressModal) { return; }
  state.editingProgressId = entryId;
  state.editingDeletedAttachments = [];
  els.progressInput.value = entry.content;
  els.progressModal.hidden = false;
  if (els.progressAttachment) {
    els.progressAttachment.value = "";
  }
  if (els.progressAttachmentName) {
    els.progressAttachmentName.textContent = "点击选择文件追加附件";
  }
  if (els.progressModalCustomerName) {
    els.progressModalCustomerName.textContent = "— " + (entry.customer || state.activeProgressCustomer);
  }
  renderEditAttachments(entry);
}

function openProgressModal() {
  if (!els.progressModal) { return; }
  if (!state.isBatchProgress) {
    if (!state.activeProgressCustomer) { return; }
    if (!state.activeProgressIsPending) { showToast("已完成状态不支持更新进度", "warning"); return; }
  }
  resetProgressEditor();
  if (els.progressModalCustomerName) {
    if (state.isBatchProgress) {
      var ids = [...state.boardSelected];
      var names = ids.map(function (id) {
        var r = warningStore.find(function (w) { return w.id === id; });
        return r ? r.customer : "";
      }).filter(Boolean);
      els.progressModalCustomerName.textContent = "— 批量 (" + names.length + "个: " + names.slice(0, 3).join(", ") + (names.length > 3 ? "…" : "") + ")";
    } else {
      els.progressModalCustomerName.textContent = "— " + state.activeProgressCustomer;
    }
  }
  els.progressModal.hidden = false;
}

function closeProgressModal() {
  if (!els.progressModal) { return; }
  els.progressModal.hidden = true;
}

// ── Remark Modal ──

function deleteProgressEntry(entryId) {
  var index = progressStore.findIndex(function (entry) { return entry.id === entryId; });
  if (index === -1) { return; }
  progressStore.splice(index, 1);
  persistProgressStore();
  renderProgress();
  showToast("进度记录已删除", "info");
}

function addLogEntry(warningId, customer, oldStatus, newStatus) {
  const entry = {
    id: `log-${warningId}-${Date.now()}`,
    warningId,
    customer,
    oldStatus,
    newStatus,
    operator: getRole().label,
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " ")
  };
  logStore.push(entry);
  logStore.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  persistLogStore();
}

function getFilteredLogs() {
  const customerFilter = els.logCustomerFilter ? els.logCustomerFilter.value : "";
  return logStore.filter((entry) => !customerFilter || entry.customer === customerFilter);
}

function renderLogs() {
  if (!els.logTableBody) { return; }
  const visibleLogs = getFilteredLogs();
  els.logTableBody.innerHTML = visibleLogs
    .map(
      (entry) => `
        <tr>
          <td>${escapeHtml(entry.timestamp)}</td>
          <td><strong>${escapeHtml(entry.customer)}</strong></td>
          <td><span class="log-status-badge ${escapeHtml(entry.oldStatus)}">${escapeHtml(getWarningStatusLabel(entry.oldStatus))}</span> → <span class="log-status-badge ${escapeHtml(entry.newStatus)}">${escapeHtml(getWarningStatusLabel(entry.newStatus))}</span></td>
          <td>${escapeHtml(entry.operator)}</td>
        </tr>`
    )
    .join("");
  els.logEmptyState.hidden = visibleLogs.length > 0;
}

function openLogModal() {
  if (!els.logModal) { return; }
  populateLogCustomerFilter();
  renderLogs();
  els.logModal.hidden = false;
}

function closeLogModal() {
  if (!els.logModal) { return; }
  els.logModal.hidden = true;
}

function populateLogCustomerFilter() {
  if (!els.logCustomerFilter) { return; }
  const customers = [...new Set(logStore.map((e) => e.customer).filter(Boolean))].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
  const currentValue = els.logCustomerFilter.value;
  els.logCustomerFilter.innerHTML = '<option value="">全部</option>';
  customers.forEach((c) => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    els.logCustomerFilter.append(option);
  });
  els.logCustomerFilter.value = currentValue;
}

function getRole() {
  return roleOptions.find((role) => role.value === state.role) || roleOptions[0];
}

function getRoleScopedWarnings() {
  const role = getRole();
  return warningStore.filter((record) => role.isAdmin || record.salesperson === role.value);
}

function getBoardRows(ignoreStatus = false) {
  return getRoleScopedWarnings()
    .filter((record) => record.status !== "overdue")
    .filter((record) => ignoreStatus || state.boardStatus === "all" || record.status === state.boardStatus)
    .filter((record) => !state.boardCustomerFilter || record.customer === state.boardCustomerFilter)
    .filter((record) => !state.boardSalespersonFilter || record.salesperson === state.boardSalespersonFilter)
    .filter((record) => !state.boardOperatorFilter || (record.operator || "system") === state.boardOperatorFilter)
    .filter((record) => {
      const from = datetimeLocalToComparable(state.boardLatestTimeFrom);
      const to = datetimeLocalToComparable(state.boardLatestTimeTo);
      if (!from && !to) { return true; }
      const latestTime = getLatestPreorderTime(record.latestByWarehouse);
      if (from && to) { return latestTime >= from && latestTime <= to; }
      if (from) { return latestTime >= from; }
      return latestTime <= to;
    })
    .filter((record) => {
      const from = datetimeLocalToComparable(state.boardWarningTimeFrom);
      const to = datetimeLocalToComparable(state.boardWarningTimeTo);
      if (!from && !to) { return true; }
      const triggeredAt = record.triggeredAt || "";
      if (from && to) { return triggeredAt >= from && triggeredAt <= to; }
      if (from) { return triggeredAt >= from; }
      return triggeredAt <= to;
    })
    .sort((a, b) => {
      const weight = { pending: 0, processed: 1 };
      return (weight[a.status] ?? 9) - (weight[b.status] ?? 9) || a.customer.localeCompare(b.customer, "zh-Hans-CN");
    });
}

function getWarningStatusLabel(status) {
  return {
    pending: "待处理",
    processed: "已完成"
  }[status] || status;
}

function renderRoleOptions() {
  roleOptions.forEach((role) => {
    const option = document.createElement("option");
    option.value = role.value;
    option.textContent = role.label;
    els.roleSelect.append(option);
  });
}

function renderBoardCounts() {
  const all = getRoleScopedWarnings().filter((record) => record.status !== "overdue");
  const pending = all.filter((record) => record.status === "pending").length;
  const processed = all.filter((record) => record.status === "processed").length;

  els.countPending.textContent = pending;
  els.countProcessed.textContent = processed;
  els.countAll.textContent = all.length;
}

function getLatestProgressContent(customer) {
  var entries = getProgressEntries(customer);
  return entries.length ? entries[0].content : "";
}

function renderBoard() {
  renderBoardCounts();
  const visibleRows = getBoardRows();

  els.alertBody.innerHTML = visibleRows
    .map((record) => {
      const warehouseCells = warehouseOptions
        .map((warehouse) => {
          const time = record.latestByWarehouse[warehouse];
          const empty = !time;
          return `<td><span class="warehouse-time ${empty ? "empty" : ""}" title="${escapeHtml(time || "无预报")}">${escapeHtml(formatWarehouseTime(time))}</span></td>`;
        })
        .join("");
      const latestPreorderTime = getLatestPreorderTime(record.latestByWarehouse);
      var latestContent = getLatestProgressContent(record.customer);
      var contentHtml = latestContent
        ? '<span class="board-content-text" title="' + escapeHtml(latestContent) + '">' + escapeHtml(latestContent.length > 20 ? latestContent.slice(0, 20) + "…" : latestContent) + '</span>'
        : '<span class="board-content-empty">—</span>';

      var isSelected = state.boardSelected.has(record.id);
      return `
        <tr data-customer="${escapeHtml(record.customer)}" data-id="${escapeHtml(record.id)}" class="${isSelected ? "board-selected" : ""}">
          <td><input class="board-row-check" type="checkbox" data-id="${escapeHtml(record.id)}" ${isSelected ? "checked" : ""} /></td>
          <td><strong>${escapeHtml(record.customer)}</strong></td>
          <td>${escapeHtml(record.salesperson)}</td>
          <td><span class="warehouse-time ${latestPreorderTime ? "" : "empty"}" title="${escapeHtml(latestPreorderTime || "无预报")}">${escapeHtml(formatWarehouseTime(latestPreorderTime))}</span></td>
          ${warehouseCells}
          <td>${contentHtml}</td>
          <td><span class="operator-text">${escapeHtml(record.operator || "system")}</span></td>
          <td><span class="warehouse-time">${escapeHtml(formatMinute(record.triggeredAt))}</span></td>
        </tr>
      `;
    })
    .join("");

  els.overviewEmptyState.hidden = visibleRows.length > 0;
  updateBoardSelectAll(visibleRows);
  updateBoardListToolbar();
}

function resetBoardFilters() {
  state.boardCustomerFilter = "";
  state.boardSalespersonFilter = "";
  state.boardOperatorFilter = "";
  state.boardLatestTimeFrom = "";
  state.boardLatestTimeTo = "";
  state.boardWarningTimeFrom = "";
  state.boardWarningTimeTo = "";
  els.overviewCustomerSearch.value = "";
  els.overviewSalespersonSearch.value = "";
  if (els.overviewOperatorSearch) { els.overviewOperatorSearch.value = ""; }
  els.overviewLatestTimeFrom.value = "";
  els.overviewLatestTimeTo.value = "";
  els.overviewWarningTimeFrom.value = "";
  els.overviewWarningTimeTo.value = "";
  els.latestTimeDisplay.value = "";
  els.latestTimeBox.classList.remove("has-value");
  els.warningTimeDisplay.value = "";
  els.warningTimeBox.classList.remove("has-value");
  state.boardSelected.clear();
  renderBoard();
}

function drillToDetails(customer, warehouse = "") {
  openDetailsDrawer();
  state.activeProgressCustomer = customer;
  // 判断当前客户的预警状态
  var w = warningStore.find(function (r) { return r.customer === customer; });
  state.activeProgressIsPending = w ? w.status === "pending" : false;
  resetProgressEditor();
  renderProgress();
  els.customerInput.value = customer;
  setActiveWarehouseTab(warehouse);
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
    drillToDetails(incomingFilter.customer_name || "", incomingFilter.warehouse_name || "");
    return;
  }

  if (view === "details") {
    switchTab("details");
  }
}

window.incoming_filter = window.incoming_filter || null;

function updateBoardSelectAll(visibleRows) {
  if (!els.boardSelectAll) { return; }
  const visibleIds = visibleRows.map((r) => r.id);
  const checkedCount = visibleIds.filter((id) => state.boardSelected.has(id)).length;
  els.boardSelectAll.checked = visibleIds.length > 0 && checkedCount === visibleIds.length;
  els.boardSelectAll.indeterminate = checkedCount > 0 && checkedCount < visibleIds.length;
}

// ── Range picker helpers ──

function datetimeLocalToComparable(value) {
  return value ? value.replace("T", " ") : "";
}

function comparableToDisplay(value) {
  // "2026-06-14 23:07" → "2026-06-14 23:07"
  return value;
}

function syncRangeBox(displayEl, boxEl, fromEl, toEl) {
  const from = fromEl ? fromEl.value : "";
  const to = toEl ? toEl.value : "";
  const fromText = datetimeLocalToComparable(from);
  const toText = datetimeLocalToComparable(to);
  if (from && to) {
    displayEl.value = `${fromText}  —  ${toText}`;
    boxEl.classList.add("has-value");
  } else if (from) {
    displayEl.value = `${fromText} 起`;
    boxEl.classList.add("has-value");
  } else if (to) {
    displayEl.value = `截至 ${toText}`;
    boxEl.classList.add("has-value");
  } else {
    displayEl.value = "";
    boxEl.classList.remove("has-value");
  }
}

function clearRangeBox(boxEl, displayEl, fromEl, toEl, dropEl) {
  fromEl.value = "";
  toEl.value = "";
  displayEl.value = "";
  boxEl.classList.remove("has-value");
  dropEl.hidden = true;
}

function setupRangeBox(boxEl, displayEl, dropEl, fromEl, toEl, clearBtn) {
  // Toggle dropdown
  displayEl.addEventListener("click", (e) => {
    e.stopPropagation();
    dropEl.hidden = !dropEl.hidden;
  });

  // Apply filter on date change
  [fromEl, toEl].forEach((input) => {
    input.addEventListener("change", () => {
      syncRangeBox(displayEl, boxEl, fromEl, toEl);
      renderBoard();
    });
  });

  // Clear
  clearBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    clearRangeBox(boxEl, displayEl, fromEl, toEl, dropEl);
    renderBoard();
  });
}

function updateBoardListToolbar() {
  if (!els.boardListToolbar) { return; }
  const count = state.boardSelected.size;
  els.boardListSelectionInfo.textContent = "已选 " + count + " 条";
  if (els.boardListBatchBtn) {
    const hide = state.boardStatus === "processed" || state.boardStatus === "all";
    els.boardListBatchBtn.hidden = hide;
    if (!hide) { els.boardListBatchBtn.disabled = count === 0; }
  }
  if (els.boardListBatchRemarkBtn) {
    const hideR = state.boardStatus === "processed" || state.boardStatus === "all";
    els.boardListBatchRemarkBtn.hidden = hideR;
    if (!hideR) { els.boardListBatchRemarkBtn.disabled = count === 0; }
  }
}

function exportBoardCSV() {
  const visibleRows = getBoardRows();
  if (!visibleRows.length) { return; }

  const headerColumns = [
    "客户简称", "业务员", "最新预报时间",
    "洛杉矶仓", "芝加哥仓", "新泽西仓", "萨凡纳仓", "休斯顿仓", "奥克兰仓",
    "预警时间", "处理内容", "操作人", "状态"
  ];

  const header = headerColumns.map(csvCell).join(",");
  const body = visibleRows.map((record) => {
    const latestPreorderTime = getLatestPreorderTime(record.latestByWarehouse);
    const warehouseCells = warehouseOptions.map((wh) => csvCell(formatWarehouseTime(record.latestByWarehouse[wh])));
    return [
      csvCell(record.customer),
      csvCell(record.salesperson),
      csvCell(formatWarehouseTime(latestPreorderTime)),
      ...warehouseCells,
		csvCell(formatMinute(record.triggeredAt)),
      csvCell(getWarningStatusLabel(record.status))
    ].join(",");
  });

  const blob = new Blob([`﻿${[header, ...body].join("\r\n")}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getBoardExportFileName();
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function getBoardExportFileName() {
  const timestamp = new Date()
    .toISOString()
    .slice(0, 19)
    .replaceAll("-", "")
    .replace("T", "_")
    .replaceAll(":", "");
  return `循环柜预警_${timestamp}.csv`;
}

function batchUpdateBoardStatus(newStatus) {
  const ids = [...state.boardSelected];
  if (!ids.length) { return; }

  ids.forEach((id) => {
    const record = warningStore.find((r) => r.id === id);
    if (record && record.status !== newStatus) {
      const oldStatus = record.status;
      record.status = newStatus;
      record.operator = getRole().label;
      if (newStatus === "processed") {
        record.processedAt = new Date().toISOString().slice(0, 19).replace("T", " ");
      }
      addLogEntry(record.id, record.customer, oldStatus, newStatus);
    }
  });

  state.boardSelected.clear();
  persistWarningStore();
  renderBoard();
}

function exportSelectedCSV() {
  const selectedRows = getFilteredRows().filter((row) => state.selected.has(row.containerNo));
  if (!selectedRows.length) { return; }

  const header = exportColumns.map((column) => csvCell(column.title)).join(",");
  const body = selectedRows.map((row, index) => {
    return exportColumns
      .map((column) => {
        const value = column.getValue ? column.getValue(row, index) : row[column.key];
        return csvCell(value);
      })
      .join(",");
  });

  const blob = new Blob([`﻿${[header, ...body].join("\r\n")}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getExportFileName();
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function updateDetailsBatchUI() {
  const hasSelection = state.selected.size > 0;
  if (els.exportSelectedButton) {
    els.exportSelectedButton.hidden = !hasSelection;
  }
  if (els.clearSelectionButton) {
    els.clearSelectionButton.hidden = !hasSelection;
  }
}

function readFilters() {
  state.filters.customer = els.customerInput.value.trim().toLowerCase();
  state.filters.salesperson = els.salespersonInput.value.trim().toLowerCase();
  state.filters.orderType = els.orderTypeSelect.value;
  state.filters.status = els.statusSelect.value;
  state.filters.createdAt = els.createdAtInput.value.trim().toLowerCase();
  state.filters.warehouse = state.activeWarehouseTab || els.warehouseSelect.value;
}

function getFilteredRows() {
  const { customer, salesperson, orderType, status, createdAt, warehouse } = state.filters;
  const role = getRole();

  return rows
    .filter((row) => role.isAdmin || row.salesperson === role.value)
    .filter((row) => {
      const customerMatch = !customer || row.customer.toLowerCase().includes(customer);
      const salespersonMatch = !salesperson || row.salesperson.toLowerCase().includes(salesperson);
      const orderTypeMatch = !orderType || row.orderType === orderType;
      const statusMatch = !status || row.status === status;
      const createdAtMatch = !createdAt || row.createdAt.toLowerCase().includes(createdAt);
      const warehouseMatch = !warehouse || row.warehouse === warehouse;

      return customerMatch && salespersonMatch && orderTypeMatch && statusMatch && createdAtMatch && warehouseMatch;
    })
    .sort((a, b) => {
      if (!state.sortKey || !state.sortDirection) {
        return parseDateTime(b.createdAt) - parseDateTime(a.createdAt);
      }

      const result = String(a[state.sortKey]).localeCompare(String(b[state.sortKey]), "zh-Hans-CN");
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

function formatFileSize(bytes) {
  if (!bytes) { return "0 B"; }
  if (bytes < 1024) { return bytes + " B"; }
  if (bytes < 1048576) { return (bytes / 1024).toFixed(1) + " KB"; }
  return (bytes / 1048576).toFixed(2) + " MB";
}

let _toastTimer = 0;
function showToast(message, type) {
  if (!els.toast) { return; }
  clearTimeout(_toastTimer);
  els.toast.textContent = message;
  els.toast.className = "toast toast-" + (type || "success");
  els.toast.hidden = false;
  _toastTimer = setTimeout(function () {
    els.toast.hidden = true;
  }, 2800);
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
          <td>${row.totalBoxes}</td>
          <td>${row.volume}</td>
          <td>${row.weight}</td>
          <td title="${escapeHtml(row.salesperson)}">${escapeHtml(row.salesperson)}</td>
          <td title="${escapeHtml(row.orderType)}">${escapeHtml(row.orderType)}</td>
          <td><span class="status-badge">${escapeHtml(row.status)}</span></td>
          <td title="${escapeHtml(row.createdAt)}">${escapeHtml(row.createdAt)}</td>
        </tr>
      `;
    })
    .join("");

  els.resultSummary.textContent = `共 ${visibleRows.length} 条`;
  els.selectionInfo.textContent = `已选 ${state.selected.size} 条`;
  els.emptyState.hidden = visibleRows.length > 0;
  updateSelectAll(visibleRows);
  updateDetailsBatchUI();
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
  return `循环柜预警明细_${timestamp}.csv`;
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
  els.customerInput.value = "";
  els.salespersonInput.value = "";
  els.orderTypeSelect.value = "";
  els.statusSelect.value = "";
  els.createdAtInput.value = "";
  els.warehouseSelect.value = "";
  state.selected.clear();
  setActiveWarehouseTab("");
  applySearch();
}

function setActiveWarehouseTab(warehouse) {
  state.activeWarehouseTab = warehouse;
  els.warehouseSelect.value = warehouse;
  els.warehouseTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.warehouse === warehouse);
  });
}

function switchTab(tabName) {
  document.querySelectorAll(".page-shell").forEach(function (panel) {
    panel.hidden = panel.id !== "tab-" + tabName;
  });

  closeDetailsDrawer();

  if (tabName === "overview") {
    renderBoard();
  }
}

function openDetailsDrawer() {
  const drawer = document.querySelector("#tab-details");
  drawer.hidden = false;
  document.body.classList.add("details-open");
}

function closeDetailsDrawer() {
  closeProgressModal();
  const drawer = document.querySelector("#tab-details");
  if (drawer) {
    drawer.hidden = true;
  }
  document.body.classList.remove("details-open");
  state.activeProgressCustomer = "";
  resetProgressEditor();
  renderProgress();
}

function bindEvents() {
  els.tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!btn.dataset.tab) {
        return;
      }

      switchTab(btn.dataset.tab);
    });
  });

  els.statusTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".status-tab");
    if (!button) {
      return;
    }

    state.boardStatus = button.dataset.status;
    state.boardSelected.clear();
    document.querySelectorAll(".status-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderBoard();
  });

  if (els.boardSelectAll) {
    els.boardSelectAll.addEventListener("change", () => {
      const visibleRows = getBoardRows();
      visibleRows.forEach((record) => {
        if (els.boardSelectAll.checked) {
          state.boardSelected.add(record.id);
        } else {
          state.boardSelected.delete(record.id);
        }
      });
      renderBoard();
    });
  }

  els.roleSelect.addEventListener("change", () => {
    state.role = els.roleSelect.value;
    resetBoardFilters();
    renderTable();
  });

  function applyBoardSearch() {
    state.boardCustomerFilter = els.overviewCustomerSearch.value.trim();
    state.boardSalespersonFilter = els.overviewSalespersonSearch.value.trim();
    state.boardOperatorFilter = els.overviewOperatorSearch ? els.overviewOperatorSearch.value.trim() : "";
    state.boardLatestTimeFrom = els.overviewLatestTimeFrom.value;
    state.boardLatestTimeTo = els.overviewLatestTimeTo.value;
    state.boardWarningTimeFrom = els.overviewWarningTimeFrom.value;
    state.boardWarningTimeTo = els.overviewWarningTimeTo.value;
    syncRangeBox(els.latestTimeDisplay, els.latestTimeBox, els.overviewLatestTimeFrom, els.overviewLatestTimeTo);
    syncRangeBox(els.warningTimeDisplay, els.warningTimeBox, els.overviewWarningTimeFrom, els.overviewWarningTimeTo);
    renderBoard();
  }

  els.boardSearchButton.addEventListener("click", applyBoardSearch);

  els.resetBoardButton.addEventListener("click", resetBoardFilters);

  // ── Range picker events ──

  setupRangeBox(els.latestTimeBox, els.latestTimeDisplay, els.latestTimeBox.querySelector(".range-drop"), els.overviewLatestTimeFrom, els.overviewLatestTimeTo, els.latestTimeClear);
  setupRangeBox(els.warningTimeBox, els.warningTimeDisplay, els.warningTimeBox.querySelector(".range-drop"), els.overviewWarningTimeFrom, els.overviewWarningTimeTo, els.warningTimeClear);

  // Click outside to dismiss dropdowns
  document.addEventListener("click", (event) => {
    [els.latestTimeBox, els.warningTimeBox].forEach((box) => {
      if (!box.contains(event.target)) {
        box.querySelector(".range-drop").hidden = true;
      }
    });
  });

  els.alertBody.addEventListener("dblclick", (event) => {
    if (event.target.closest("input[type=checkbox]")) {
      return;
    }

    const row = event.target.closest("tr[data-customer]");
    if (!row) {
      return;
    }

    drillToDetails(row.dataset.customer);
  });

  els.alertBody.addEventListener("change", (event) => {
    if (!event.target.matches(".board-row-check")) {
      return;
    }
    const id = event.target.dataset.id;
    if (event.target.checked) {
      state.boardSelected.add(id);
    } else {
      state.boardSelected.delete(id);
    }
    renderBoard();
  });

  els.backButton.addEventListener("click", closeDetailsDrawer);
  els.searchButton.addEventListener("click", applySearch);
  els.resetButton.addEventListener("click", resetSearch);
  els.exportButton.addEventListener("click", exportRows);

  if (els.exportSelectedButton) {
    els.exportSelectedButton.addEventListener("click", exportSelectedCSV);
  }

  if (els.clearSelectionButton) {
    els.clearSelectionButton.addEventListener("click", () => {
      state.selected.clear();
      renderTable();
    });
  }

  if (els.progressAttachment) {
    els.progressAttachment.addEventListener("change", updateProgressAttachmentName);
  }

  if (els.progressUpdateBtn) {
    els.progressUpdateBtn.addEventListener("click", openProgressModal);
  }

  if (els.progressConfirmBtn) {
    els.progressConfirmBtn.addEventListener("click", submitProgress);
  }

  if (els.progressCancelBtn) {
    els.progressCancelBtn.addEventListener("click", closeProgressModal);
  }

  if (els.progressList) {
    els.progressList.addEventListener("click", function (event) {
      var deleteBtn = event.target.closest(".progress-delete-btn");
      if (deleteBtn) {
        deleteProgressEntry(deleteBtn.dataset.id);
        return;
      }
      var editBtn = event.target.closest(".progress-edit-btn");
      if (editBtn) {
        editProgressEntry(editBtn.dataset.id);
        return;
      }
    });
  }

  if (els.progressModalClose) {
    els.progressModalClose.addEventListener("click", closeProgressModal);
  }

  if (els.progressModal) {
    els.progressModal.addEventListener("click", function (event) {
      if (event.target === els.progressModal) {
        closeProgressModal();
      }
    });
  }

  // 编辑模式下删除已有附件
  if (els.progressEditAttachments) {
    els.progressEditAttachments.addEventListener("click", function (event) {
      var delBtn = event.target.closest(".progress-edit-attach-del");
      if (!delBtn) { return; }
      var index = parseInt(delBtn.dataset.index, 10);
      if (!isNaN(index)) {
        state.editingDeletedAttachments.push(index);
        var item = delBtn.closest(".progress-edit-attach-item");
        if (item) {
          item.style.display = "none";
        }
      }
    });
  }

  [els.customerInput, els.salespersonInput, els.createdAtInput].forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        applySearch();
      }
    });
  });

  [els.orderTypeSelect, els.statusSelect].forEach((select) => {
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

  // ── Board list toolbar ──

  if (els.boardListExportBtn) {
    els.boardListExportBtn.addEventListener("click", exportBoardCSV);
  }

  if (els.boardListBatchBtn) {
    els.boardListBatchBtn.addEventListener("click", () => {
      if (state.boardSelected.size === 0 || state.boardStatus === "processed" || state.boardStatus === "all") { return; }
      batchUpdateBoardStatus("processed");
    });
  }

  if (els.boardListViewLogBtn) {
    els.boardListViewLogBtn.addEventListener("click", openLogModal);
  }

  if (els.boardListBatchRemarkBtn) {
    els.boardListBatchRemarkBtn.addEventListener("click", function () {
      if (state.boardSelected.size === 0) { return; }
      state.isBatchProgress = true;
      openProgressModal();
    });
  }

  // ── Log modal ──

  if (els.logModalClose) {
    els.logModalClose.addEventListener("click", closeLogModal);
  }

  if (els.logModal) {
    els.logModal.addEventListener("click", (event) => {
      if (event.target === els.logModal) {
        closeLogModal();
      }
    });
  }

  if (els.logCustomerFilter) {
    els.logCustomerFilter.addEventListener("change", renderLogs);
  }
}

function init() {
  els.monitorWindowText.textContent = `检测区间：${auditWindow.weekStart.slice(0, 10)} 周一 00:00 至 ${auditWindow.riskEnd.slice(0, 10)} 周三 23:59`;
  els.runMeta.textContent = `触发时间 ${auditWindow.triggeredAt.slice(0, 16)}`;
  renderRoleOptions();
  fillSelect(els.overviewCustomerSearch, uniqueValues("customer"));
  fillSelect(els.overviewSalespersonSearch, uniqueValues("salesperson"));
  if (els.overviewOperatorSearch) {
    fillSelect(els.overviewOperatorSearch, ["system"].concat(uniqueValues("salesperson")));
  }
  fillSelect(els.orderTypeSelect, uniqueValues("orderType"));
  fillSelect(els.statusSelect, statusOptions);
  fillSelect(els.warehouseSelect, warehouseOptions);
  bindEvents();
  renderBoard();
  applySearch();
  applyIncomingFilter();
}

try {
  init();
} catch (e) {
  document.getElementById('monitorWindowText') && (document.getElementById('monitorWindowText').textContent = '初始化失败: ' + e.message);
  document.getElementById('alertBody') && (document.getElementById('alertBody').innerHTML = '<tr><td colspan="13" style="color:red;padding:20px;text-align:center;">初始化错误: ' + e.message + '</td></tr>');
}
