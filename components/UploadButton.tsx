export default function UploadButton({ upload }) {
  return (
    <form>
      <label>
        <input type="file" onChange={(event) => upload(event)} />
      </label>
    </form>
  );
}
