import Main from "../layout/main";
import { login, storeUserData } from "../store/user";
import { getProfile } from "../utils/spotify";
import { Auth } from "../utils/useUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";