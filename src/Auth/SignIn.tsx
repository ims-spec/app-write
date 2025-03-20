import { useState } from "react";
import { account } from "../appWrite";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(false);
    e.preventDefault();
    const getSession = await account.createEmailPasswordSession(
      email,
      password
    );
    console.log(getSession)
    setSession(getSession.$id);
    
  };

  if (loading) <div>Loadnig ...</div>;
  if (session) {
    return (
      <div>
        <form onSubmit={login}>
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
            <button type="submit"></button>
          </div>
        </form>
      </div>
    );
  }
};
