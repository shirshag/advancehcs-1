"use client";
import { useState } from "react";

export default function FeeSection() {
    const [tab, setTab] = useState("bba");

    return (
        <>





            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    {/* TITLE */}
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Fee Structure
                    </h2>

                    <h4 className="text-lg font-semibold text-gray-700 mb-6 text-center">
                        Details Fees For BBA (HM)
                    </h4>

                    {/* TABLE */}
                    <div className="overflow-x-auto border border-gray-300 rounded-md shadow-sm">

                        <table className="min-w-[900px] w-full text-sm md:text-base border-collapse">

                            {/* HEADER */}
                           <thead className="bg-[#0F286B] text-white">
                                <tr className="[&>th]:p-3 [&>th]:border [&>th]:border-[hsla(0,0%,100%,0.25)]">
                                    <th>Items</th>
                                    <th>1st Sem</th>
                                    <th>2nd Sem</th>
                                    <th>3rd Sem</th>
                                    <th>4th Sem</th>
                                    <th>5th Sem</th>
                                    <th >6th Sem</th>
                                    <th>7th Sem</th>
                                    <th >8th Sem</th>
                                    <th className="text-right">Total (₹)</th>
                                </tr>
                            </thead>

                            {/* BODY */}
                              <tbody className="text-gray-700 [&>tr>td]:p-4 [&>tr>td]:border [&>tr>td]:border-[hsla(0,0%,50.2%,0.25)]">

                                {/* Admission */}
                                <tr className="hover:bg-gray-50">
                                    <td className="font-medium">Admission Fees</td>
                                    <td className="text-center">25,000</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-right">25,000</td>
                                </tr>

                                {/* Development */}
                                <tr className="hover:bg-gray-50">
                                    <td className="font-medium">Development Fees</td>
                                    <td className="text-center">4,000</td>
                                    <td className="text-center">4,000</td>
                                    <td className="text-center">4,000</td>
                                    <td className="text-center">4,000</td>
                                    <td className="text-center">4,000</td>
                                    <td className="text-center">4,000</td>
                                    <td className="text-center">4,000</td>
                                    <td className="text-center">4,000</td>
                                    <td className="text-right">32,000</td>
                                </tr>

                                {/* Library */}
                                <tr className="hover:bg-gray-50">
                                    <td className="font-medium">Library Fees</td>
                                    <td className="text-center">4,000</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-right">4,000</td>
                                </tr>

                                {/* Tuition */}
                                <tr className="hover:bg-gray-50">
                                    <td className="font-medium">Tuition Fees</td>
                                    <td className="text-center">35,000</td>
                                    <td className="text-center">35,000</td>
                                    <td className="text-center">35,000</td>
                                    <td className="text-center">35,000</td>
                                    <td className="text-center">35,000</td>
                                    <td className="text-center">30,000</td>
                                    <td className="text-center">30,000</td>
                                    <td className="text-center">30,000</td>
                                    <td className="text-right">2,65,000</td>
                                </tr>

                                {/* Caution */}
                                <tr className="hover:bg-gray-50">
                                    <td className="font-medium">Caution Money</td>
                                    <td className="text-center">5,000</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-right">5,000</td>
                                </tr>

                                {/* TOTAL */}
                                <tr className="bg-gray-100 font-semibold text-gray-900">
                                    <td className="p-3 border">Total (₹)</td>
                                    <td className="text-center">73,000</td>
                                    <td className="text-center">39,000</td>
                                    <td className="text-center">39,000</td>
                                    <td className="text-center">39,000</td>
                                    <td className="text-center">39,000</td>
                                    <td className="text-center">34,000</td>
                                    <td className="text-center">34,000</td>
                                    <td className="text-center">34,000</td>
                                    <td className="text-right">3,15,000</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </section>












            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    <h4 className="text-lg font-semibold text-gray-700 mb-6 text-center">
                      Details Fees For MHA
                    </h4>

                    {/* TABLE */}
                    <div className="overflow-x-auto border border-gray-300 rounded-md shadow-sm">

                        <table className="min-w-[900px] w-full text-sm md:text-base border-collapse">

                            {/* HEADER */}
                            <thead className="bg-[#0F286B] text-white">
                                <tr className="[&>th]:p-3 [&>th]:border [&>th]:border-[hsla(0,0%,100%,0.25)]">
                                    <th>Items</th>
                                    <th>1st Semester</th>
                                    <th>2nd Semester</th>
                                    <th>3rd Semester</th>
                                    <th>4th Semester</th>
                                    <th className="text-right">Total (₹)</th>
                                </tr>
                            </thead>

                            {/* BODY */}
                            <tbody className="text-gray-700 [&>tr>td]:p-4 [&>tr>td]:border [&>tr>td]:border-[hsla(0,0%,50.2%,0.25)]">

                                <tr className="hover:bg-gray-50 ">
                                    <td className="font-medium">Admission Fees</td>
                                    <td className="text-center">55,789</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-right">55,789</td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="font-medium">Development Fees</td>
                                    <td className="text-center">6,974</td>
                                    <td className="text-center">6,974</td>
                                    <td className="text-center">6,974</td>
                                    <td className="text-center">6,974</td>
                                    <td className="text-right">27,896</td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="font-medium">Library Fees</td>
                                    <td className="text-center">6,974</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-right">6,974</td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="font-medium">Tuition Fees</td>
                                    <td className="text-center">1,18,641</td>
                                    <td className="text-center">1,11,706</td>
                                    <td className="text-center">1,04,770</td>
                                    <td className="text-center">97,835</td>
                                    <td className="text-right">4,32,952</td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="font-medium">Caution Fee</td>
                                    <td className="text-center">6,974</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-center">–</td>
                                    <td className="text-right">6,974</td>
                                </tr>

                                {/* TOTAL */}
                                <tr className="bg-gray-100 font-semibold text-gray-900">
                                    <td>Total</td>
                                    <td className="text-center">1,95,352</td>
                                    <td className="text-center">1,18,680</td>
                                    <td className="text-center">1,11,744</td>
                                    <td className="text-center">1,04,224</td>
                                    <td className="text-right">5,30,000</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

        </>
    );
}