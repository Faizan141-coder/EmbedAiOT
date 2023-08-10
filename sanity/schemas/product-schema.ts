import { defineField, defineType } from "sanity";

export const product = defineType({
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }]
        },
        {
            name: "features",
            title: "Features",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "sensingRanges",
            title: "Sensing Ranges",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "applications",
            title: "Applications",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "description1",
            title: "Description1",
            type: "string"
        },
        {
            name: "description2",
            title: "Description2",
            type: "string"
        },
        {
            name: "sku",
            title: "SKU",
            type: "string"
        },
        {
            name: "currency",
            title: "Currency",
            type: "string"
        },
        {
            name: "price",
            title: "Price",
            type: "number"
        }
    ]
})
