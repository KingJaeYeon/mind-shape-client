export default function PasswordInput({
  id,
  type = "password",
}: {
  id: string;
  type: "password" | "text";
}) {
  return <input type={type} id={id} />;
}
