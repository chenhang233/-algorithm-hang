
#define MIN(a, b) ((a) < (b) ? (a) : (b))

double champagneTower(int poured, int query_row, int query_glass)
{
    double row[query_row + 1];
    row[0] = poured;
    for (int i = 1; i <= query_row; i++)
    {
        double nextRow[i + 1];
        for (int j = 0; j <= i; j++)
        {
            nextRow[j] = 0.0;
        }
        for (int j = 0; j < i; j++)
        {
            double volume = row[j];
            if (volume > 1)
            {
                nextRow[j] += (volume - 1) / 2;
                nextRow[j + 1] += (volume - 1) / 2;
            }
        }
        memcpy(row, nextRow, sizeof(double) * (i + 1));
    }
    return MIN(1.0, row[query_glass]);
}