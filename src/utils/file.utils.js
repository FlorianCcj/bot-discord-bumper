const fs = require('fs');

function read_in_json_file(file_path) {
  try {
    test = fs.readFileSync(file_path);
    return JSON.parse(test)
  } catch (err) {
    write_in_json_file(file_path, {});
    return {};
  }
}

function write_in_json_file(file_path, json_data) {
  try {
    fs.writeFileSync(file_path, JSON.stringify(json_data));
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  read_in_json_file,
  write_in_json_file
};
