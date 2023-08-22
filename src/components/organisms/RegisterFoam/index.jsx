import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text, Input } from "../../atoms";
import { Button } from "../../molecules";

export const RegisterFoam = props => {
  const [errors, setErrors] = useState({});
  const [check, setCheck] = useState(false);

  const [name, setName] = useState("");
  const [contactName, setContactName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [secondName, setSecondName] = useState("");

  const [designation, setDesignation] = useState("");
  const [date, setDate] = useState("");

  const [registerAs, setRegisterAs] = useState("");
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    // Errors Add
    // setErrors({ name: "Ponka Mera bhai" });
    // setCheck(true);

    fetch('https://countriesnow.space/api/v0.1/countries/')
      .then((response) => response.json())
      .then((data) => {
        setCountriesList(data.data);
        // for (let i in data.data) {
        //   console.log(data.data[i].country)
        // }
      });
  });

  const updateRadioButton = (e) => {
    setRegisterAs(e.target.value)
  }

  const validationForm = () => {
    setErrors({})
    // const errors = {};
    if (name === "") {
      setErrors({ name: 'Please enter name' , ...errors});
      console.log("Name")
    }
    if (contactName === "") {
      setErrors({ contactName: 'Please enter contact name', ...errors });
      console.log("Contact Name")
    }
    if (jobTitle === "") {
      setErrors({ jobTitle: 'Please enter job title', ...errors });
    }
    if (telephoneNumber === "") {
      setErrors({ telephoneNumber: 'Please enter telephone number', ...errors });
    }
    if (emailAddress === "") {
      setErrors({ emailAddress: 'Please enter email address', ...errors });
    }
    if (address === "") {
      setErrors({ address: 'Please enter address' , ...errors});
    }
    if (city === "") {
      setErrors({ city: 'Please enter city' , ...errors});
    }
    if (postalCode === "") {
      setErrors({ postalCode: 'Please enter postal code', ...errors });
    }
    if (country === "") {
      setErrors({ country: 'Please enter country' , ...errors});
    }
    // if (website === "") {
    //   setErrors({ name: 'Please enter name' , ...errors});
    // }
    // if (secondName === "") {
    //   setErrors({ name: 'Please enter name' , ...errors});
    // }
    // if (designation === "") {
    //   setErrors({ name: 'Please enter name' , ...errors});
    // }
    // if (date === "") {
    //   setErrors({ name: 'Please enter name' , ...errors});
    // }
    // if (registerAs === "") {
    //   setErrors({ name: 'Please enter name' , ...errors});
    // }
    return false
  }

  console.log(errors);

  return (
    <Division divVariant="flex flex-row justify-center items-center pb-10">

      <Division divVariant="flex flex-col mx-5 sm:mx-10 md:mx-15 2xl:mx-25 w-full gap-3 lg:gap-5">

        <Division divVariant="flex flex-wrap gap-1 md:gap-3 lg:gap-5">
          <Division divVariant="flex flex-row gap-1 justify-center items-center">
            <Input onChange={updateRadioButton} inputValue="RegisterAsStartup" inputType="radio" inputName="regiterType" value inputVariant="w-2 h-2" inputPlaceholder="" />
            <Text textVariant="text-white font-robotoMono text-18px"> Register as Startup </Text>
          </Division>
          <Division divVariant="flex flex-row justify-center items-center gap-1">
            <Input onChange={updateRadioButton} inputValue="RegisterAsExhibitor" inputType="radio" inputName="regiterType" inputVariant="w-2 h-2 " inputPlaceholder="" />
            <Text textVariant="text-white font-robotoMono text-18px"> Register as Exhibitor </Text>
          </Division>
        </Division>

        <Division divVariant="flex flex-wrap items-center gap-1 md:gap-2">

          <Division divVariant="flex flex-col md:flex-row justify-center md:justify-between w-full gap-1 md:gap-2 lg:gap-3">
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Name </Text>
              <Input onChange={(e) => setName(e.target.value)} inputType="text" inputName="Ponka" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
              <Text textVariant="text-hr"> {errors.name} </Text>
            </Division>
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Contact Name </Text>
              <Input onChange={(e) => setContactName(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
              <Text textVariant="text-hr"> {errors.contactName} </Text>
            </Division>
          </Division>

          <Division divVariant="flex flex-col md:flex-row justify-center md:justify-between w-full gap-1 md:gap-2 lg:gap-3">
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Job Title </Text>
              <Input onChange={(e) => setJobTitle(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
              <Text textVariant="text-hr"> {errors.jobTitle} </Text>
            </Division>
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Telephone Number </Text>
              <Input onChange={(e) => setTelephoneNumber(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
              <Text textVariant="text-hr"> {errors.telephoneNumber} </Text>
            </Division>
          </Division>

          <Division divVariant="flex flex-col md:flex-row justify-center md:justify-between w-full gap-1 md:gap-2 lg:gap-3">
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Email Address </Text>
              <Input onChange={(e) => setEmailAddress(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
              <Text textVariant="text-hr"> {errors.emailAddress} </Text>
            </Division>
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Address </Text>
              <Input onChange={(e) => setAddress(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
              <Text textVariant="text-hr"> {errors.address} </Text>
            </Division>
          </Division>

          <Division divVariant="flex flex-col md:flex-row justify-center md:justify-between w-full gap-1 md:gap-2 lg:gap-3">
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> City </Text>
              <Input onChange={(e) => setCity(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
            </Division>
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Postal Code </Text>
              <Input onChange={(e) => setPostalCode(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
            </Division>
          </Division>

          <Division divVariant="flex flex-col md:flex-row justify-center md:justify-between w-full gap-1 md:gap-2 lg:gap-3">
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Country </Text>
              {/* <Input onChange={(e) => setCountry(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" /> */}
              {<select className="rounded-sm px-1 py-0-7" onChange={(e) => setCountry(e.target.value)}>
                <option> Select a country </option>
                {
                  countriesList.map((check, index) => {
                    return (
                      <option> {check.country} </option>
                    )
                  })
                }
              </select>}
            </Division>
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Website </Text>
              <Input onChange={(e) => setWebsite(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
            </Division>
          </Division>

          <Division divVariant="flex flex-row justify-center w-full py-2 lg:py-3">
            <Text textVariant="text-white font-worksans text-14px text-center bg-blue-20 z-1"> By signing this Application the startup agrees to all the Terms and Conditions of participation in the exhibition of PAKISTANTECH EXPO USA 2022 </Text>
          </Division>

          <Division divVariant="flex flex-col md:flex-row justify-center md:justify-between w-full gap-1 md:gap-2 lg:gap-3">
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Name </Text>
              <Input onChange={(e) => setSecondName(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
            </Division>
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Designation </Text>
              <Input onChange={(e) => setDesignation(e.target.value)} inputType="text" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
            </Division>
          </Division>

          <Division divVariant="flex flex-col md:flex-row justify-center md:justify-between w-full gap-1 md:gap-2 lg:gap-3">
            <Division divVariant="flex flex-col gap-1 w-full">
              <Text textVariant="text-white font-worksans text-18px"> Date </Text>
              <Input onChange={(e) => setDate(e.target.value)} inputType="date" inputName="" inputVariant="rounded-sm px-1 py-0-6" inputPlaceholder="" />
            </Division>
            <Division divVariant="flex flex-col gap-1 w-full">
            </Division>
          </Division>

          <Division divVariant="flex flex-col md:flex-row justify-center md:justify-between w-full gap-1 md:gap-2 lg:gap-3">
            <Division divVariant="flex flex-col gap-1 lg:w-1/2 py-2">
              <Button onClick={validationForm} buttonVariant="buttonPrimaryAnimation font-normal py-1 text-hr border border-blue-40 rounded-md text-center font-robotoCondensed text-20px cursor-pointer">
                Submit
              </Button>
            </Division>
          </Division>

          <Division divVariant="flex flex-col md:flex-row justify-center md:justify-between w-full gap-1 md:gap-2 lg:gap-3">
            <Division divVariant="flex flex-row items-center gap-1 lg:w-1/2">
              <Input onChange={(e) => console.log(e.target.checked)} inputType="checkbox" inputName="" inputVariant="rounded-sm px-1 py-0-6 h-1-5 w-1-5" inputPlaceholder="" />
              <Text textVariant="text-white font-inter"> Click to agree to the <Text textVariant="text-hr"> Terms & Conditions </Text> </Text>
            </Division>
          </Division>

        </Division>
      </Division>

    </Division>
  );
};