import { createTransport } from "nodemailer";

const transporter = createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "kuluruvineeth8623@gmail.com",
    pass: "cqudocdrueyyuyyp",
  },
  secure: true,
});

export default transporter;
