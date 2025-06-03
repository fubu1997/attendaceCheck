// ATTENDANCECHECK/employees.js

/**
 * 해경 전체 인원 목록 (id, name, group 포함)
 * 실제 운용 시에는 이 배열을 400명 분량으로 늘립니다.
 */
const employees = [
  { id: "HC001", name: "김철수", group: "321함" },
  { id: "HC002", name: "이영희", group: "321함" },
  { id: "HC003", name: "박민수", group: "322함" },
  { id: "HC004", name: "최지은", group: "322함" },
  { id: "HC005", name: "정다연", group: "323함" }
  // … 실제 400명 분량으로 확장
];

// 브라우저 전역 변수로도 접근하기 위해 export (Node.js 환경 호환용)
if (typeof module !== "undefined" && module.exports) {
  module.exports = employees;
}
