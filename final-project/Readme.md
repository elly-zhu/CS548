### Application


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

#### Frontened
```
# on another terminal
cd frontend
npm install
npm run dev
```
![image](https://github.com/elly-zhu/CS548Repo/assets/22209839/3fd494e8-ca3d-4ab3-bd45-02dc96d1fa68)

visit http://localhost:5173/



