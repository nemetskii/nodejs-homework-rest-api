import contactsAPI from '../models/contacts/contacts.js';
import HttpError from '../helpers/HttpError.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

const getAll = async (req, res) => {
  const result = await contactsAPI.listContacts();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await contactsAPI.getContactById(id);

  if (!result) {
    throw HttpError(404, 'Contact not found');
  }

  res.status(200).json(result);
};

const add = async (req, res) => {
  const result = await contactsAPI.addContact(req.body);
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  const result = await contactsAPI.removeContact(id);

  if (!result) {
    throw HttpError(404, 'Contact not found');
  }

  res.json('Contact deleted');
};

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await contactsAPI.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};
