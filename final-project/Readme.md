
## Overview
### Backend

#### API definition
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/5840fe34-3dc5-4e45-bff0-962a27d2226d)
(https://app.swaggerhub.com/apis/EZHU0808/myPhoneBook/1.0.0#/Contact)

#### Use of Logger
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/d36998e0-9f96-4b44-9745-50578d3d24ef)

#### Connect with DB
```
mongoose
  .connect(mongoUri)
  .then(() => {
    logger.info(`App Connected to the Database`);
    server.listen(port, () => {
      logger.info(`Example app listening on port ${port}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
````
#### Define Contact Model
```
import mongoose, { Schema } from "mongoose";

const ContactSchema = Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    landline: {
      type: String,
      required: false,
    },
    timezone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    note: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", ContactSchema);
```

### Frontend
#### Use Tailwind for easier styling
#### Create pages for different routes for usability
```
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacts/create' element={<CreateContact/>}/>
      <Route path='/contacts/details/:id' element={<ShowContact/>}/>
      <Route path='/contacts/edit/:id' element={<EditContact/>}/>
      <Route path='/contacts/delete/:id' element={<DeleteContact/>}/>
    </Routes>
  )
}

export default App
```
#### Create components for different pages for usability
```
        <Spinner />
      ) : showType === "table" ? (
        <ContactsTable contacts={contacts} />
      ) : (
        <ContactCardsView contacts={contacts} />
      )}
```
#### Connect with external API to get WorldTime by timezone name
```
import axios from "axios";

/****
 * World Time API
 * https://worldtimeapi.org/pages/examples
 */
const getWorldTimeByTimezone = async (timezone) => {
  try {
    const response = await axios.get(
      `http://worldtimeapi.org/api/timezone/${timezone}`
    );

    if (response.status === 200) {
      return response.data.datetime;
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    // Handle errors, log them, or throw further if needed
    console.error("Error fetching world time:", error.message);
    throw error; // You can choose to handle the error or rethrow it
  }
};
export default getWorldTimeByTimezone;
```
## Application 
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/3a086086-4d95-4419-84eb-0b1280cc8125)
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/2ea55a5c-9f3d-43fc-9f0c-695ac1aecc8a)
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/a71167a4-f55c-40c4-acb9-1bef370cec83)
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/cf46614c-6958-4a83-bce5-1e163075da7c)
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/789ca764-949f-4df9-a845-2bd91bb616f6)
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/485bc3f8-385a-4fb2-84fe-32439b8d8f86)
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/07289f9c-db29-4358-bcb1-c3ed138d09bc)

### How to run
#### Backend
```
# on one terminal
cd backend
npm install
npm start
```
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/66cb5fa7-58b9-4094-b90e-9e2101a3f7f8)

vist https://localhost:8080/
If you see the following page, click on proceed
![Pasted Graphic 4](https://github.com/elly-zhu/CS548Repo/assets/22209839/21506999-ab6f-40b0-97d2-74729091905d)
#### Frontened
```
# on another terminal
cd frontend
npm install
npm run dev
```
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/3fd494e8-ca3d-4ab3-bd45-02dc96d1fa68)

visit http://localhost:5173/



