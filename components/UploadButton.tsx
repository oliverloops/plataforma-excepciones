export default function UploadButton({ upload }) {
  return (
    <form>
      <label>
        <input type="file" onChange={upload} />
      </label>
    </form>
  );
}
