import moment from "moment";

export default (seconds) => moment.utc(seconds * 1000).format("HH:mm:ss");
