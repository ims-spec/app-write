import { useState } from "react";
import { account, ID } from "../appWrite";

export const SignUp = ({ isLogin, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  const newUser = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(false);
    e.preventDefault();
    const user = await account.create(ID.unique(), email, password, name);
    console.log(user);
  };

  if (loading) <div>Loadnig ...</div>;

  return (
    <div>
      <form onSubmit={newUser}>
        <div>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="password" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <button type="submit">Create user</button>
        </div>
      </form>
      <div>
        <span>Don't have an account?</span>
        <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
          Sign Up Now
        </button>
      </div>
    </div>
  );
};
