"use client"
import { Button } from "@/Components/ui/button"
import { Form } from "@/Components/ui/form"
import { UseSignUpForm } from "@/hooks/useSignUp"
import abeezee from "@/lib/font"
import GenericFormInput from "@/Shared/GenericFormInput"
import { SignUpForm } from "@/utils/signupForm"

const signUp = () => {
    const { form, onSubmit } = UseSignUpForm();
    return (
        <section className='min-h-screen bg-primaryColor font-sans'>
            <div className="heroGetStarted min-h-screen bg-cover bg-center pt-12 pb-12">
                <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%] m-auto p-4 rounded-br-2xl rounded-tl-2xl bg-[#F7F8F8] flex justify-center items-center">
                    <div className="lg:w-[60%] md:w-[60%] sm:w-[90%] w-[90%] mb-14 ">
                        <h1 className={`font-bold text-[18px] text-primaryColor mt-10  mb-5 ${abeezee.className}`}>Create your Dependly account</h1>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                {SignUpForm().signUpForm.map((elem, i) => (
                                   <div
                                   key={i + elem.name}
                                   className={`relative mb-2 
                                     ${elem.type === "select" || elem.type === "number" ? "inline-block mr-[2%]" : "block w-full"} 
                                     ${elem.type === "select" ? "w-[30%]" : elem.type === "number" ? "w-[60%]" : ""}`}
                                 >                                                                       
                                        <GenericFormInput
                                            form={form}
                                            {...elem}
                                            placeholder={elem.placeholder || ""}
                                            type={
                                                elem.type
                                            }
                                        />
                                    </div>
                                ))}

                                <div className="mt-6">
                                    <Button type="submit" className="bg-primaryColor text-white w-full py-6">Continue</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default signUp