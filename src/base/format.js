const maps = {
  'yyyy': date => date.getFullYear(),
  'MM': date => fix(date.getMonth() + 1),
  'dd': date => fix(date.getDate()),
  'HH': date => fix(date.getHours()),
  'mm': date => fix(date.getMinutes()),
  'ss': date => fix(date.getSeconds())
};

const initTimeDate = () => {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};

const fix = (str) => {
  str = "" + str;
  return str.length <= 1? "0" + str : str;
};

const handleFormat = (value, format = "yyyy-MM-dd HH:mm:ss") => {
  const trunk = new RegExp(Object.keys(maps).join('|'),'g');

  value = new Date(value);

  return format.replace(trunk, (capture) => {
    return maps[capture]? maps[capture](value): "";
  });
};

export default {
  initTimeDate,
  fix,
  handleFormat
}

