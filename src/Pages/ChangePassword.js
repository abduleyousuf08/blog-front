import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ChangePassword() {
  const [password, setPassword] = useState({});
  const token = localStorage.getItem("token");

  function handleOnChangePassword() {
    if (password.oldPassword === password.newPassword) {
      return toast.error("Enter new password please!!");
    }
    axios
      .put("http://localhost:10000/auth/change", password, {
        headers: { Authorization: token },
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }

  return (
    <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
      <h2 className="mb-8 text-center font-bold text-2xl">Change Password</h2>
      <p className="text-gray-500 pb-4">
        Make sure your new password is a strong password. Do mix letters and
        special characters
      </p>
      <div className="my-2 space-y-2">
        <span>Enter old password</span>
        <input
          className="w-full border p-2 rounded-md"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, oldPassword: e.target.value })
          }
        />
      </div>
      <div className="my-2 space-y-2">
        <span>Enter new password</span>
        <input
          className="w-full border p-2 rounded-md"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, newPassword: e.target.value })
          }
        />
      </div>
      <div className="my-2 space-y-2">
        <span>Confirm new password</span>
        <input
          className="w-full border p-2 rounded-md"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, ConPassword: e.target.value })
          }
        />
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="px-5 py-2.5 bg-blue-500 text-white rounded-md"
          onClick={handleOnChangePassword}
        >
          Change Password
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
