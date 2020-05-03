import React from "react";
import {useLocalStore, useObserver} from "mobx-react";

const store = useLocalStore(()=>({ bugs:["Centipede"]}))

export default 