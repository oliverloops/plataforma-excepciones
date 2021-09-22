export default function UploadButton({ upload }) {
  return (
    <form>
      <label>
        <input type="file" name="evidence_file" onChange={upload} />
      </label>
    </form>
  );
}
