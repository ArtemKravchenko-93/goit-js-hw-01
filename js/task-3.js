function getElementWidth(content, padding, border) {
    const Npx =
        Number.parseFloat(content) +
        Number.parseFloat(padding) * 2 +
        Number.parseFloat(border) * 2;
    return Npx;
}

