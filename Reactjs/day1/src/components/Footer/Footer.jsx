// import "./footer";

export default function Footer()
{
  return <>
    <div className="d-flex justify-content-between p-5 text-light bg-dark">
      <div>
        <p className="text-uppercase fw-bold mb-3">get in touch</p>
        <div>
        <i className="bi bi-envelope-fill"> badran7299@gmail.com</i>
        </div>
        <div><i className="bi bi-telephone-fill"> 01063806110</i></div>
      </div>
      <button className="btn btn-outline-light  rounded-0 h-25 fs-4 fw-bold text-uppercase">contact me</button>
      <div>
      <i className="bi bi-linkedin"></i>
      <i className="bi bi-facebook mx-4"></i>
      <i className="bi bi-twitter"></i>
      <p className="mt-3">Copyright&copy;2024</p>
      </div>
    </div>
  </>
}