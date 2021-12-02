export default function UploadButton({ upload }) {
  return (
    <form>
      <label>
        <input
          type="file"
          name="inputfile"
          onChange={(event) => upload(event)}
        />
      </label>
    </form>
  );
}
