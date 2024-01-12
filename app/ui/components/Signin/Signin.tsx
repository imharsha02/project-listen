const Signin = () => {
  return (
    <div className="p-3 bg-slate-200 max-w-max rounded-xl mx-auto">
      <form>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className=" bg-cyan-50 rounded-md py-[2px] focus:outline-none px-1 ml-2"/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className=" bg-cyan-50 rounded-md py-[2px] focus:outline-none px-1 ml-2"/>
        </div>
        <div className="w-full">
          <button className=" bg-cyan-50 px-5 py-2 rounded-md" type="submit">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
