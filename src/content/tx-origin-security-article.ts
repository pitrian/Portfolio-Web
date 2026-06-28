/**
 * Nội dung bài: Why tx.origin is a Security Trap — import trong site.ts.
 */
export const txOriginSecurityArticle = {
  dek: "Exploring the critical security risks of using tx.origin for authorization in Solidity smart contracts and how to avoid them.",
  body: [
    {
      type: "h2",
      text: "Tổng Quan Về Vấn Đề",
    },
    {
      type: "p",
      text: "Trong thế giới phát triển hợp đồng thông minh (smart contract), việc xác thực quyền hạn bằng tx.origin được coi là một sai lầm nghiêm trọng. Bài viết tập trung phân tích lý do tại sao việc sử dụng tx.origin để cấp quyền lại tiềm ẩn nhiều rủi ro bảo mật và đưa ra cách tiếp cận đúng đắn từ góc nhìn của một Senior Auditor.",
    },
    {
      type: "h2",
      text: "Bối Cảnh: Hợp Đồng \"Telephone\"",
    },
    {
      type: "p",
      text: "Bài toán Telephone trong Ethernaut wargame là điểm khởi đầu để thảo luận. Hợp đồng có đoạn mã sau:",
    },
    {
      type: "ul",
      items: [
        "function changeOwner(address _owner) public { if (tx.origin != msg.sender) { owner = _owner; } }",
      ],
    },
    {
      type: "h2",
      text: "Bản Chất Kiến Trúc: tx.origin vs msg.sender",
    },
    {
      type: "p",
      text: "Sự khác biệt giữa tx.origin và msg.sender:",
    },
    {
      type: "ul",
      items: [
        "tx.origin: Là ví cá nhân (EOA) ban đầu khởi tạo giao dịch, luôn là người ký và trả phí gas.",
        "msg.sender: Là thực thể trực tiếp gọi tới hàm – có thể là EOA hoặc một hợp đồng thông minh trung gian.",
      ],
    },
    {
      type: "p",
      text: "Khi tương tác trực tiếp bằng ví cá nhân:",
    },
    {
      type: "ul",
      items: ["tx.origin == msg.sender"],
    },
    {
      type: "p",
      text: "Nếu có một hợp đồng tấn công làm trung gian:",
    },
    {
      type: "ul",
      items: [
        "tx.origin ≠ msg.sender, dẫn đến điều kiện thỏa mãn và quyền sở hữu bị đánh cắp dễ dàng.",
      ],
    },
    {
      type: "h2",
      text: "Góc Nhìn Auditor: Kịch Bản Tấn Công Thực Tế",
    },
    {
      type: "p",
      text: "Với môi trường thật (Mainnet):",
    },
    {
      type: "ul",
      items: [
        "Lỗ hổng trở thành công cụ phishing phổ biến.",
        "Tưởng tượng một hợp đồng DeFi bảo vệ hàm rút tiền qua yêu cầu require(tx.origin == owner).",
        "Kẻ tấn công tạo hợp đồng giả mạo, dụ người dùng kích hoạt chức năng mint -> kích hoạt lệnh rút tiền trái phép.",
        "Kết quả: Tài sản bị rút sạch dù chủ sở hữu không hề biết mình đã phê duyệt hành động đó.",
      ],
    },
    {
      type: "h2",
      text: "Bài Học Cho Nhà Phát Triển",
    },
    {
      type: "p",
      text: "Lời khuyên quan trọng nhất: Loại bỏ hoàn toàn tx.origin khỏi tư duy phân quyền.",
    },
    {
      type: "ul",
      items: [
        "Dùng các thiết kế được kiểm chứng như Ownable hoặc AccessControl của OpenZeppelin.",
        "Ví dụ:",
      ],
    },
    {
      type: "p",
      text: "import \"@openzeppelin/contracts/access/Ownable.sol\";\n\ncontract SecureTelephone is Ownable {\n    constructor() Ownable(msg.sender) {}\n\n    function changeOwner(address _newOwner) public onlyOwner {\n        transferOwnership(_newOwner);\n    }\n}",
    },
    {
      type: "h2",
      text: "Thời Điểm Được Phép Dùng tx.origin?",
    },
    {
      type: "p",
      text: "Một ngoại lệ rất hiếm:",
    },
    {
      type: "ul",
      items: [
        "Ngăn chặn hợp đồng thông minh tương tác với hệ thống, chỉ cho phép người dùng thực tương tác (EOA).",
        "Ví dụ:",
      ],
    },
    {
      type: "p",
      text: "require(msg.sender == tx.origin, \"Chỉ cho phép ví cá nhân EOA tương tác!\");\n\n(Tuy nhiên, với xu hướng Account Abstraction (EIP-4337) thì mô hình này có thể phản tác dụng lên trải nghiệm người dùng.)",
    },
    {
      type: "h2",
      text: "Lời Kết",
    },
    {
      type: "p",
      text: "Bảo mật blockchain đôi khi xuất phát từ việc am hiểu những chi tiết nhỏ bé nhất trong Solidity. Một cú click của người dùng có thể trở thành chìa khóa vạn năng cho hacker khai thác. Kiểm tra, rà soát các điểm sử dụng tx.origin thường xuyên để ngăn ngừa rủi ro.",
    },
  ],
};
