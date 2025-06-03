// ATTENDANCECHECK/employees.js

/**
 * 해경 전체 인원 목록.
 * 실제 운용 시에는 400명 분량으로 확장.
 * id: QR 코드에 담기는 고유 문자열(예: 사번, UUID 등)
 * name: 실제 직원 이름
 */
const employees = [
  { id: "HC001", name: "김철수" },
  { id: "HC002", name: "이영희" },
  { id: "HC003", name: "박민수" },
  { id: "HC004", name: "최지은" },
  { id: "HC005", name: "정다연" }
  // … 나머지 인원 추가
];

// 모듈 방식(import) 사용 시를 대비한 export. 브라우저 전역 변수만 써도 상관없음.
if (typeof module !== "undefined" && module.exports) {
  module.exports = employees;
}
