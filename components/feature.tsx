'use client';

import React from 'react';
import { motion } from 'motion/react';

const Feature: React.FC = () => (
    <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
                {/* placeholder for your demo image */}
                <motion.div
                    className="w-full h-64 bg-gray-200 rounded-md"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                />
            </div>

            <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">
                    Introducing the AI-Powered Text to Image Generator
                </h2>
                <p className="text-gray-600 mb-4">
                    Easily bring your ideas to life with our free AI image generator. Whether you need stunning
                    visuals or unique imagery, our tool transforms your text into eye-catching images with just
                    a few clicks.
                </p>
                <p className="text-gray-600">
                    Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in
                    seconds. From product visuals to character designs and portraits, even concepts that don’t
                    yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative
                    possibilities are limitless!
                </p>
            </div>
        </div>
    </motion.section>
);

export default Feature;
