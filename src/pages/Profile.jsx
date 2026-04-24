import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Profile() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");

    const handleUpdate = async () => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            });

            alert("Profile updated successfully ✅");

            navigate("/");

        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <h2 style={{ textAlign: "center" }}>Profile</h2>

            <input
                type="text"
                placeholder="Display Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Photo URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
            />

            <button className="btn-blue" onClick={handleUpdate}>
                Update Profile
            </button>
        </div>
    );
}