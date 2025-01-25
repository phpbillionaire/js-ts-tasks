class User {
  constructor(firstName, secondName, age) {
    if (secondName === undefined || age === undefined) {
      throw new Error('Something is empty');
    }
    if (typeof secondName !== 'string') {
      throw new Error("Only strings allowed for 'firstName' and 'secondName'");
    }
    if (typeof age !== 'number') {
      throw new Error("Only numbers allowed for 'age'");
    }

    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== 'number' || !age) {
      throw new Error('Invalid age');
    }
    this._age = age;
  }

  set firstName(firstName) {
    if (typeof firstName !== 'string' || firstName === undefined) {
      throw new Error('Invalid first name');
    }
    this._firstName = firstName;
  }

  set secondName(secondName) {
    if (typeof secondName !== 'string' || secondName === undefined) {
      throw new Error('Invalid second name');
    }
    this._secondName = secondName;
  }

  get name() {
    return `${this._firstName} ${this._secondName}`;
  }

  introduce() {
    return `My name is ${this._firstName} ${this._secondName}, I'm ${this._age}`;
  }

  celebrateBirthday() {
    this._age++;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(user => new User(user.firstName, user.secondName, user.age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.comparator);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  users.forEach((user, index) => {
    if (index % 2 === 0) {
      user.celebrateBirthday();
    }
  });
  return users;
};
