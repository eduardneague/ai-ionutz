export async function GET(request: Request) {
    // Connect Azure Function endpoint
    const response = await fetch('https://runwild-generator.azurewebsites.net/api/getchatgptsuggestion', {
        cache: 'no-store',
    })

    const textData = await response.text()
    return new Response(JSON.stringify(textData.trim()), {
        status: 200
    })
}