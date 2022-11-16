import Header from "./components/header";
import Button from "../components/Button";

export default function TestModal({ data, close }) {
  return (
    <>
      <Header title="Modal Header Test" />
      <div className="p-4">
        Test Modal Component
        <Button variant="danger" onClick={close}>Modal Kapat</Button>
      </div>
    </>
  )
}