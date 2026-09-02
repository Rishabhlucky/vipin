import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Get data from frontend
    const { products, phone } = await req.json();

    // =========================
    // Validation
    // =========================

    if (!products || !Array.isArray(products) || products.length === 0) {
      return NextResponse.json(
        { error: "Please add at least one product." },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        { error: "Please enter your phone number." },
        { status: 400 }
      );
    }

    // Check every product
    for (const product of products) {
      if (!product.productName || !product.quantity) {
        return NextResponse.json(
          {
            error: "Please enter product name and quantity for all products.",
          },
          { status: 400 }
        );
      }
    }

    // =========================
    // Nodemailer Transporter
    // =========================

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // =========================
    // Create Product Rows
    // =========================

    const productRows = products
      .map(
        (item, index) => `
          <tr>
            <td
              style="
                padding: 10px;
                border: 1px solid #ddd;
                text-align: center;
              "
            >
              ${index + 1}
            </td>

            <td
              style="
                padding: 10px;
                border: 1px solid #ddd;
              "
            >
              ${item.productName}
            </td>

            <td
              style="
                padding: 10px;
                border: 1px solid #ddd;
                text-align: center;
              "
            >
              ${item.quantity}
            </td>
          </tr>
        `
      )
      .join("");

    // =========================
    // Send Email
    // =========================

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,

      subject: "New Quote Request",

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 0 auto;
          "
        >

          <h2 style="color: #2563eb;">
            New Quote Request
          </h2>

          <p>
            A customer has submitted a new quote request.
          </p>

          <!-- Products -->

          <h3>Requested Products</h3>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              margin-top: 15px;
            "
          >

            <thead>
              <tr>
                <th
                  style="
                    padding: 10px;
                    border: 1px solid #ddd;
                    background: #f3f4f6;
                  "
                >
                  #
                </th>

                <th
                  style="
                    padding: 10px;
                    border: 1px solid #ddd;
                    background: #f3f4f6;
                    text-align: left;
                  "
                >
                  Product Name
                </th>

                <th
                  style="
                    padding: 10px;
                    border: 1px solid #ddd;
                    background: #f3f4f6;
                  "
                >
                  Quantity
                </th>
              </tr>
            </thead>

            <tbody>
              ${productRows}
            </tbody>

          </table>

          <!-- Phone -->

          <div
            style="
              margin-top: 25px;
              padding: 15px;
              background: #f3f4f6;
              border-radius: 8px;
            "
          >
            <p style="margin: 0;">
              <strong>Customer Phone:</strong>
              ${phone}
            </p>
          </div>

        </div>
      `,
    });

    // =========================
    // Success Response
    // =========================

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully.",
    });
  } catch (error) {
    console.error("Quote email error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
