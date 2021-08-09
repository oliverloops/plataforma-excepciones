export default function UploadButton({ getFileName }) {
  return (
    <form>
      <label>
        <input type="file" onChange={getFileName} />
      </label>
    </form>
  );
}
