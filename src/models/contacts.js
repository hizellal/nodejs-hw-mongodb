import mongoose from 'mongoose';

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: false,
    },

    isFavourite: { 
      type: Boolean, 
      required: false,
      default: false, 
    },

    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
  },
  { 
    timestamps: true,
    versionKey: false,
  },
);
export const Contacts = mongoose.model('contact', contactSchema);