// ATTENDANCECHECK/employees.js

/**
 * 해경 전체 인원 목록
 * 각 객체에 { id, name, group } 속성이 들어갑니다.
 * 실제 운영 시에는 배열을 400명 분량으로 확장하세요.
 */
const employees = [
  { id: "HC001", name: "김철수", group: "321함" },
  { id: "HC002", name: "이영희", group: "321함" },
  { id: "HC003", name: "박민수", group: "322함" },
  { id: "HC004", name: "최지은", group: "322함" },
  { id: "HC005", name: "정다연", group: "3010함" },
  { id: "HC006", name: "정다연", group: "3010함" },
  { id: "HC007", name: "정다연", group: "3013함" },
  { id: "HC008", name: "정다연", group: "P-67정" },
  { id: "HC009", name: "정다연", group: "P-91정" },
  { id: "HC010", name: "정다연", group: "P-69정" },
  // … 나머지 400명 분량을 여기에 추가
];

// 브라우저 전역에서 접근할 수 있도록 export(선택)
// (Node.js 환경에서 불러올 때 필요하지만, 순수 브라우저 환경이라면 없어도 무방)
if (typeof module !== "undefined" && module.exports) {
  module.exports = employees;
}
