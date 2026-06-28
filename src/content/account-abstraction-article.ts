/**
 * Nội dung bài: Mastering Account Abstraction — import trong site.ts.
 */
export const accountAbstractionArticle = {
  dek: "A deep dive into ERC-4337 and why it is the key to onboarding the next billion users to Web3.",
  body: [
    {
      type: "h2" as const,
      text: "1. The Core Concept: What is AA?",
    },
    {
      type: "p" as const,
      text: "Chào mừng bạn đến với kỷ nguyên mới của Web3. Nếu như trước đây, chúng ta bị giới hạn bởi EOA (Externally Owned Accounts) — nơi mà việc mất \"private key\" đồng nghĩa với việc mất trắng tài sản — thì Account Abstraction (AA) đã thay đổi hoàn toàn cuộc chơi.",
    },
    {
      type: "p" as const,
      text: "Nói một cách đơn giản: AA biến ví của bạn thành một Smart Contract thông minh. Thay vì chỉ là một cặp khóa tĩnh, giờ đây ví có thể chứa các logic phức tạp như tự khôi phục, giới hạn chi tiêu, hoặc thanh toán phí gas bằng bất kỳ loại token nào.",
    },
    {
      type: "h2" as const,
      text: "2. Anatomy of an AA Transaction",
    },
    {
      type: "p" as const,
      text: "Để làm chủ (Master) được dự án này, bạn cần hiểu luồng đi của một giao dịch thông qua ERC-4337:",
    },
    {
      type: "ul" as const,
      items: [
        "UserOperation (UserOp): Ý định giao dịch của người dùng, chứa các tham số về hành động mong muốn.",
        "Bundlers: Các thực thể gom nhiều UserOp lại thành một giao dịch duy nhất để đưa lên on-chain nhằm tối ưu chi phí.",
        "EntryPoint: Contract trung tâm chịu trách nhiệm xác thực (Validate) và thực thi (Execute) các UserOp này.",
      ],
    },
    {
      type: "h2" as const,
      text: "3. Advanced Features: Where the Magic Happens",
    },
    {
      type: "p" as const,
      text: "Tại sao dự án AA Wallet của tôi lại khác biệt? Đó là nhờ vào việc ứng dụng các module nâng cao:",
    },
    {
      type: "ul" as const,
      items: [
        "Paymasters (Gasless Experience): Cho phép ứng dụng trả phí gas thay cho người dùng hoặc cho phép người dùng trả gas bằng stablecoin (USDC/USDT) thay vì token gốc của mạng lưới.",
        "Social Recovery: Không còn nỗi lo mất 12 ký tự bảo mật. Bạn có thể thiết lập quyền khôi phục ví thông qua email hoặc Face ID.",
        "Batching Transactions: Gộp nhiều bước (như Approve và Swap) vào trong một lần click duy nhất, giúp tiết kiệm thời gian và phí gas đáng kể.",
      ],
    },
    {
      type: "h2" as const,
      text: "4. Building with AI: Efficiency at its Best",
    },
    {
      type: "p" as const,
      text: "Trong dự án này, tôi đã áp dụng tư duy AI-First. Bằng cách hiểu rõ kiến trúc hệ thống, tôi đã điều hướng AI để:",
    },
    {
      type: "ul" as const,
      items: [
        "Khởi tạo các module bảo mật theo tiêu chuẩn OpenZeppelin.",
        "Tối ưu hóa logic xác thực trong contract để tránh các lỗi logic phổ biến.",
        "Tự động hóa quy trình kiểm thử (Unit Test) cho các kịch bản giao dịch phức tạp.",
      ],
    },
    {
      type: "h2" as const,
      text: "Conclusion",
    },
    {
      type: "p" as const,
      text: "Account Abstraction không chỉ là một nâng cấp kỹ thuật, nó là cầu nối mang lại trải nghiệm mượt mà của Web2 vào thế giới phi tập trung của Web3. Với sự hỗ trợ của AI và một tư duy hệ thống vững chắc, chúng ta hoàn toàn có thể xây dựng những sản phẩm thay đổi hoàn toàn cách người dùng tương tác với Blockchain.",
    },
  ],
} as const;
